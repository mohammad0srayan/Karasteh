import logging
import hashlib
from django.db.models import Q
from django.core.cache import cache
from django.core.paginator import Paginator
from rest_framework import viewsets, filters
from rest_framework.response import Response
from rest_framework import status
from rest_framework.request import Request
from rest_framework.decorators import action
from .serializers import BlogCategorySerializer, BlogPostListSerializer, BlogPostDetailSerializer
from .models import BlogCategory, BlogPost
from config.apikey import require_api_key

logger = logging.getLogger('blog')

def store_cache_key(key):
    cache_keys = cache.get('all_cache_keys', set())
    cache_keys.add(key)
    if len(cache_keys) > 1000:
        cache_keys = set(list(cache_keys)[-1000:])
    cache.set('all_cache_keys', cache_keys, None)
    logger.debug(f"بلاگ: کلید کش ذخیره شد: {key}")

class BlogCategoryViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BlogCategory.objects.filter(is_active=True, parent=None).select_related('parent').prefetch_related('children')
    serializer_class = BlogCategorySerializer

    @require_api_key
    @action(detail=False, methods=['get'])
    def menu_structure(self, request: Request, *args, **kwargs):
        """دریافت ساختار منوی دسته‌بندی‌های بلاگ"""
        cache_key = 'blog:categories'
        cached_data = cache.get(cache_key)
        if cached_data:
            logger.info("📌 دسته‌بندی: داده‌ها از کش خوانده شد.")
            return Response(cached_data, status=status.HTTP_200_OK)

        categories = self.get_queryset()
        serializer = self.serializer_class(categories, many=True)
        data = serializer.data

        cache.set(cache_key, data, timeout=900)  # 15 دقیقه
        logger.info("💾 دسته‌بندی: داده‌ها از دیتابیس خوانده و در کش ذخیره شد.")
        return Response(data, status=status.HTTP_200_OK)

class BlogPostViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = BlogPost.objects.select_related('category').all()
    serializer_class = BlogPostListSerializer
    lookup_field = 'slug'
    filter_backends = [filters.SearchFilter]
    search_fields = ['title', 'content']

    def get_queryset(self):
        queryset = super().get_queryset().filter(is_active=True)
        sort = self.request.query_params.get('sort', 'desc').lower()
        category_slug = self.request.query_params.get('category', None)

        if sort not in ['asc', 'desc']:
            logger.warning(f"بلاگ: مقدار sort نامعتبر: {sort}")
            sort = 'desc'
        order_field = 'created_at' if sort == 'asc' else '-created_at'

        if category_slug:
            queryset = queryset.filter(category__slug=category_slug)

        return queryset.order_by(order_field)

    @require_api_key
    @action(detail=False, methods=['get'], url_path='home-posts')
    def home_posts(self, request: Request):
        """دریافت مقالات محدود برای صفحه اصلی"""
        cache_key = 'blog:home_posts'
        cached_data = cache.get(cache_key)
        
        if cached_data:
            logger.info("📌 مقالات صفحه اصلی: داده‌ها از کش خوانده شد.")
            return Response(cached_data, status=status.HTTP_200_OK)

        # دریافت 4 مقاله جدید فعال با تصویر
        posts = self.get_queryset().filter(is_active=True, thumbnail__isnull=False)[:4]
        
        # سریالایزر ساده برای صفحه اصلی
        data = []
        for post in posts:
            # مدیریت درست URL تصویر
            thumbnail_url = post.thumbnail.url if post.thumbnail else None
            
            data.append({
                'id': post.id,
                'title': post.title,
                'description': post.introduction or (post.content[:150] + '...' if post.content else ''),
                'thumbnail': thumbnail_url,
                'slug': post.slug,  # تغییر به slug خالص
                'created_at': post.jalali_created.strftime("%Y/%m/%d"),
                'category': BlogCategorySerializer(post.category).data if post.category else None
            })

        cache.set(cache_key, data, timeout=300)  # 5 دقیقه
        store_cache_key(cache_key)
        
        logger.info(f"💾 مقالات صفحه اصلی: {len(data)} مقاله از دیتابیس خوانده شد.")
        return Response(data, status=status.HTTP_200_OK)

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return BlogPostDetailSerializer
        return BlogPostListSerializer

    def dispatch(self, *args, **kwargs):
        response = super().dispatch(*args, **kwargs)
        response['Cache-Control'] = 'no-cache, no-store, must-revalidate'
        response['Pragma'] = 'no-cache'
        response['Expires'] = '0'
        return response

    def get_cache_key(self, action, **kwargs):
        cache_key = None
        sort = self.request.query_params.get('sort', 'desc').lower()
        category = self.request.query_params.get('category', '')
        page = self.request.query_params.get('page', '1')

        if action == 'list':
            cache_key = f'blog:all_posts:sort_{sort}:category_{category}:page_{page}'
        elif action == 'retrieve':
            cache_key = f'blog:post:{kwargs.get("slug")}'
        elif action == 'latest_posts':
            cache_key = f'blog:latest_posts:sort_{sort}'
        elif action == 'search_posts':
            query = self.request.query_params.get('q', '') or ''
            safe_query = hashlib.md5(query.encode('utf-8')).hexdigest()
            cache_key = f'blog:search:{safe_query}:sort_{sort}:category_{category}:page_{page}'

        if cache_key:
            store_cache_key(cache_key)
        return cache_key

    def get_from_cache_or_db(self, cache_key, queryset_func, action_name):
        result = cache.get(cache_key)
        if result is None:
            logger.info(f"بلاگ: {action_name} از دیتابیس خوانده شد (کش موجود نبود) - کلید: {cache_key}")
            result = queryset_func()
            cache.set(cache_key, result, 60 * 5)
        else:
            logger.info(f"بلاگ: {action_name} از کش خوانده شد - کلید: {cache_key}")
        return result

    @require_api_key
    def list(self, request: Request, *args, **kwargs):
        try:
            page = int(request.query_params.get('page', 1))
            sort = self.request.query_params.get('sort', 'desc').lower()
            category = self.request.query_params.get('category', '')

            if sort not in ['asc', 'desc']:
                return Response({'error': 'پارامتر sort باید asc یا desc باشد'}, status=status.HTTP_400_BAD_REQUEST)

            cache_key = self.get_cache_key('list')

            def fetch_paginated_data():
                queryset = self.get_queryset()
                paginator = Paginator(queryset, 12)
                try:
                    page_obj = paginator.page(page)
                except Exception as e:
                    logger.error(f"بلاگ: خطا در صفحه‌بندی - صفحه: {page}, خطا: {str(e)}")
                    return Response({'error': 'صفحه نامعتبر است'}, status=status.HTTP_400_BAD_REQUEST)

                serializer = self.get_serializer(page_obj, many=True)
                return {
                    'data': serializer.data,
                    'next_page': page + 1 if page_obj.has_next() else None,
                    'total_pages': paginator.num_pages
                }

            result = self.get_from_cache_or_db(cache_key, fetch_paginated_data, f"لیست پست‌ها (مرتب‌سازی: {sort}, دسته‌بندی: {category})")
            logger.info(f"بلاگ: درخواست لیست پست‌ها - مرتب‌سازی: {sort} - دسته‌بندی: {category} - صفحه: {page} - تعداد: {len(result['data'])}")
            return Response(result)
        except Exception as e:
            logger.error(f"بلاگ: خطا در لیست پست‌ها - خطا: {str(e)}")
            return Response({'error': 'خطایی در پردازش درخواست رخ داد'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    @require_api_key
    def retrieve(self, request: Request, *args, **kwargs):
        slug = kwargs.get('slug')
        cache_key = self.get_cache_key('retrieve', **kwargs)

        def fetch_post_data():
            instance = self.get_object()
            if not instance.is_active:
                raise BlogPost.DoesNotExist("پست غیرفعال است")
            return instance

        try:
            instance = self.get_from_cache_or_db(cache_key, fetch_post_data, f"جزئیات پست (اسلاگ: {slug})")
            logger.info(f"بلاگ: مشاهده پست - عنوان: '{instance.title}'")
            serializer = self.get_serializer(instance)
            return Response(serializer.data)
        except BlogPost.DoesNotExist:
            logger.error(f"بلاگ: پست با اسلاگ '{slug}' یافت نشد یا غیرفعال است")
            return Response({'error': 'پست یافت نشد یا غیرفعال است'}, status=status.HTTP_404_NOT_FOUND)

    @require_api_key
    @action(detail=False, url_path='latest')
    def latest_posts(self, request: Request):
        cache_key = self.get_cache_key('latest_posts')

        def fetch_latest_posts():
            return self.get_queryset()[:10]

        posts = self.get_from_cache_or_db(cache_key, fetch_latest_posts, "آخرین پست‌ها")
        serializer = BlogPostListSerializer(posts, many=True)
        logger.info(f"بلاگ: درخواست آخرین پست‌ها - تعداد: {len(posts)}")
        return Response(serializer.data)

    @action(detail=False, methods=['get'], url_path='search')
    def search_posts(self, request: Request):
        try:
            query = request.query_params.get('q', '').strip()
            page = int(request.query_params.get('page', 1))
            sort = self.request.query_params.get('sort', 'desc').lower()
            category = self.request.query_params.get('category', '')

            if sort not in ['asc', 'desc']:
                return Response({'error': 'پارامتر sort باید asc یا desc باشد'}, status=status.HTTP_400_BAD_REQUEST)

            cache_key = self.get_cache_key('search_posts')

            def fetch_search_results():
                queryset = self.get_queryset()

                if not query:
                    return {
                        'message': 'عبارت جستجو خالی است',
                        'data': [],
                        'next_page': None,
                        'total_pages': 0,
                        'total_results': 0
                    }

                # شکستن کوئری به کلمات
                query_words = query.split()
                query_filters = Q()
                exact_match = Q()

                # جستجوی دقیق برای کل کوئری در عنوان
                exact_match |= Q(title__iexact=query)

                # جستجو برای هر کلمه در عنوان و محتوا
                for word in query_words:
                    query_filters |= (
                        Q(title__icontains=word) |
                        Q(content__icontains=word) |
                        Q(title__contains=word) |
                        Q(content__contains=word)
                    )

                queryset = queryset.filter(query_filters | exact_match)

                # مرتب‌سازی بر اساس تطابق دقیق‌تر
                queryset = queryset.order_by(
                    '-created_at' if sort == 'desc' else 'created_at'
                )

                paginator = Paginator(queryset, 12)
                try:
                    page_obj = paginator.page(page)
                except Exception as e:
                    logger.error(f"بلاگ: خطا در صفحه‌بندی - عبارت: {query}, صفحه: {page}, خطا: {str(e)}")
                    return Response({'error': 'صفحه نامعتبر است'}, status=status.HTTP_400_BAD_REQUEST)

                serializer = self.get_serializer(page_obj, many=True)
                return {
                    'data': serializer.data,
                    'next_page': page + 1 if page_obj.has_next() else None,
                    'total_pages': paginator.num_pages,
                    'total_results': paginator.count
                }

            result = self.get_from_cache_or_db(cache_key, fetch_search_results, f"نتایج جستجو (عبارت: {query}, مرتب‌سازی: {sort}, دسته‌بندی: {category})")
            logger.info(f"بلاگ: جستجوی پست‌ها - عبارت: '{query}' - مرتب‌سازی: {sort} - دسته‌بندی: {category} - صفحه: {page} - تعداد نتایج: {len(result['data'])}")
            return Response(result)
        except Exception as e:
            logger.error(f"بلاگ: خطا در جستجو - عبارت: {query}, خطا: {str(e)}")
            return Response({'error': 'خطایی در پردازش درخواست رخ داد'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)