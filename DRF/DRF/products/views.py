import logging
from django.core.cache import caches
from django.db.models import Q
from rest_framework import status
from rest_framework.exceptions import NotFound
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import AllowAny
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework.views import APIView

from config.apikey import require_api_key
from .models import Category, Product
from .serializers import CategorySerializer, ProductListSerializer, ProductDetailSerializer, HomeProductSerializer


logger = logging.getLogger('product')
product_cache = caches['product_cache']

# نمایش درخت دسته‌بندی‌ها
class CategoryTreeView(APIView):
    permission_classes = [AllowAny]

    @require_api_key
    def get(self, request: Request) -> Response:
        cache_key = 'category_tree'
        cached_data = product_cache.get(cache_key)
        if cached_data:
            logger.info('دریافت دسته‌بندی‌ها از کش')
            return Response(cached_data, status=status.HTTP_200_OK)
        try:
            categories = Category.objects.filter(parent__isnull=True, is_active=True)
            serializer = CategorySerializer(categories, many=True, context={'request': request})
            data = serializer.data
            product_cache.set(cache_key, data, timeout=3600)
            logger.info(f'دسته‌بندی‌ها دریافت و در کش ذخیره شدند: {len(data)} دسته‌بندی')
            return Response(data, status=status.HTTP_200_OK)
        except Exception as e:
            logger.exception(f'خطا در دریافت دسته‌بندی‌ها: {str(e)}')  # تغییر به logger.exception برای لاگ کامل
            return Response({'error': f'خطا در دریافت دسته‌بندی‌ها: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# نمایش لیست محصولات با فیلتر و صفحه‌بندی
class ProductListView(APIView):
    permission_classes = [AllowAny]

    @require_api_key
    def get(self, request: Request) -> Response:
        cache_key = f'products_list_{hash(str(request.query_params))}'
        cached_data = product_cache.get(cache_key)
        if cached_data:
            logger.info(f'دریافت محصولات از کش: {cache_key}')
            return Response(cached_data, status=status.HTTP_200_OK)
        queryset = Product.objects.select_related('category').prefetch_related('images')
        # فیلتر دسته‌بندی
        category_id = request.query_params.get('category_id')
        if category_id:
            try:
                category = Category.objects.get(id=category_id, is_active=True)
                descendants = category.get_descendants(include_self=True)
                queryset = queryset.filter(category__in=descendants)
            except Category.DoesNotExist:
                logger.warning(f'دسته‌بندی با شناسه {category_id} یافت نشد')
                return Response({'error': 'دسته‌بندی یافت نشد'}, status=status.HTTP_404_NOT_FOUND)
        # فیلتر قیمت
        min_price = request.query_params.get('min_price')
        max_price = request.query_params.get('max_price')
        if min_price:
            try:
                queryset = queryset.filter(price__gte=int(min_price))
            except ValueError:
                logger.warning(f'حداقل قیمت نامعتبر: {min_price}')
                return Response({'error': 'حداقل قیمت باید عدد باشد'}, status=status.HTTP_400_BAD_REQUEST)
        if max_price:
            try:
                queryset = queryset.filter(price__lte=int(max_price))
            except ValueError:
                logger.warning(f'حداکثر قیمت نامعتبر: {max_price}')
                return Response({'error': 'حداکثر قیمت باید عدد باشد'}, status=status.HTTP_400_BAD_REQUEST)
        # فیلتر موجودی
        is_available = request.query_params.get('is_available')
        if is_available and is_available.lower() == 'true':
            queryset = queryset.filter(is_available=True)
        # فیلتر محصولات ویژه
        is_featured = request.query_params.get('is_featured')
        if is_featured and is_featured.lower() == 'true':
            queryset = queryset.filter(is_featured=True)
        # فیلتر جستجو
        search_query = request.query_params.get('search')
        if search_query:
            queryset = queryset.filter(
                Q(name__icontains=search_query) |
                Q(description__icontains=search_query)
            )
        # مرتب‌سازی
        sort = request.query_params.get('sort')
        if sort == 'price_asc':
            queryset = queryset.order_by('price')
        elif sort == 'price_desc':
            queryset = queryset.order_by('-price')
        else:
            queryset = queryset.order_by('id')  # مرتب‌سازی پیش‌فرض بر اساس id
        # صفحه‌بندی
        paginator = PageNumberPagination()
        paginator.page_size = 20
        try:
            paginated_queryset = paginator.paginate_queryset(queryset, request)
        except NotFound:
            logger.warning(f'صفحه درخواست‌شده برای فیلتر {request.query_params} یافت نشد')
            return Response({'error': 'صفحه مورد نظر یافت نشد'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            logger.error(f'خطا در صفحه‌بندی محصولات: {str(e)}')
            return Response({'error': 'خطا در پردازش درخواست'}, status=status.HTTP_400_BAD_REQUEST)
        serializer = ProductListSerializer(paginated_queryset, many=True, context={'request': request})
        response_data = paginator.get_paginated_response(serializer.data).data
        if not serializer.data:
            response_data['message'] = 'هیچ محصولی با این فیلترها یافت نشد.'
        product_cache.set(cache_key, response_data, timeout=3600)
        logger.info(f'محصولات با کلید {cache_key} در کش ذخیره شد')
        return Response(response_data, status=status.HTTP_200_OK)

# نمایش جزئیات محصول
class ProductDetailView(APIView):
    permission_classes = [AllowAny]

    @require_api_key
    def get(self, request: Request, slug: str) -> Response:
        cache_key = f'product_{slug}'
        cached_data = product_cache.get(cache_key)
        if cached_data:
            logger.info(f'دریافت جزئیات محصول با اسلاگ {slug} از کش')
            return Response(cached_data, status=status.HTTP_200_OK)
        try:
            product = Product.objects.select_related('category').prefetch_related('images').get(slug=slug)
            serializer = ProductDetailSerializer(product, context={'request': request})
            data = serializer.data
            product_cache.set(cache_key, data, timeout=3600)
            logger.info(f'جزئیات محصول با اسلاگ {slug} دریافت و در کش ذخیره شد')
            return Response(data, status=status.HTTP_200_OK)
        except Product.DoesNotExist:
            logger.warning(f'محصول با اسلاگ {slug} یافت نشد')
            return Response({'error': 'محصول یافت نشد'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            logger.error(f'خطا در دریافت جزئیات محصول با اسلاگ {slug}: {str(e)}')
            return Response({'error': 'خطا در دریافت جزئیات محصول'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# نمایش 8 محصول برای صفحه اصلی
class HomeProductView(APIView):
    permission_classes = [AllowAny]

    @require_api_key
    def get(self, request: Request) -> Response:
        cache_key = 'home_products'
        cached_data = product_cache.get(cache_key)
        if cached_data:
            logger.info('دریافت محصولات صفحه اصلی از کش')
            return Response(cached_data, status=status.HTTP_200_OK)
        try:
            products = Product.objects.select_related('category').prefetch_related('images')[:8]
            serializer = HomeProductSerializer(products, many=True, context={'request': request})
            data = serializer.data
            product_cache.set(cache_key, data, timeout=3600)
            logger.info('محصولات صفحه اصلی دریافت و در کش ذخیره شدند')
            return Response(data, status=status.HTTP_200_OK)
        except Exception as e:
            logger.error(f'خطا در دریافت محصولات صفحه اصلی: {str(e)}')
            return Response({'error': 'خطا در دریافت محصولات صفحه اصلی'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
            
            
            
            
            
class ProductSearchView(APIView):
    permission_classes = [AllowAny]

    @require_api_key
    def get(self, request):
        search_query = request.query_params.get('q', '').strip()
        
        if not search_query:
            return Response({'error': 'عبارت جستجو الزامی است'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            # جستجوی هوشمند با استفاده از icontains برای نام و توضیحات
            queryset = Product.objects.select_related('category').prefetch_related('images').filter(
                Q(name__icontains=search_query) |
                Q(description__icontains=search_query)
            ).distinct()

            # صفحه‌بندی
            paginator = PageNumberPagination()
            paginator.page_size = 20
            paginated_queryset = paginator.paginate_queryset(queryset, request)

            serializer = ProductListSerializer(paginated_queryset, many=True, context={'request': request})
            response_data = paginator.get_paginated_response(serializer.data).data

            if not serializer.data:
                response_data['message'] = 'هیچ محصولی با این عبارت یافت نشد.'
                
            logger.info(f'جستجو برای "{search_query}" با {queryset.count()} نتیجه')
            return Response(response_data, status=status.HTTP_200_OK)

        except Exception as e:
            logger.error(f'خطا در جستجوی محصولات: {str(e)}')
            return Response({'error': 'خطا در پردازش جستجو'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)