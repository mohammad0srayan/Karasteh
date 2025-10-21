import logging
from django.core.cache import caches
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.generics import ListAPIView
from rest_framework.request import Request
from rest_framework.response import Response
from rest_framework import status
from .serializers import HomeSliderSerializer, AboutUsSerializer, ContactInfoSerializer, GallerySectionSerializer, ExpertsSerializer, CatalogSerializer
from .models import HomeSlider, AboutUs, ContactInfo, GallerySection, ExpertsModel, Catalog
from config.apikey import require_api_key


logger = logging.getLogger('home')


# --- اسلایدر صفحه اصلی --- #
class HomeSliderListView(ListAPIView):
    queryset = HomeSlider.objects.all()
    serializer_class = HomeSliderSerializer

    @require_api_key
    def get(self, request: Request, *args, **kwargs) -> Response:
        cache = caches['home_cache']
        cache_key = 'home_sliders'
        cached_data = cache.get(cache_key)

        if cached_data:
            logger.info('دریافت اسلایدرهای صفحه اصلی از کش')
            return Response(cached_data, status=status.HTTP_200_OK)

        try:
            response = super().get(request, *args, **kwargs)
            cache.set(cache_key, response.data, timeout=3600)
            logger.info('اسلایدرهای صفحه اصلی دریافت و در کش ذخیره شد')
            return response
        except Exception as e:
            logger.error(f'خطا در دریافت اسلایدرهای صفحه اصلی: {str(e)}')
            return Response(
                {'error': 'خطا در دریافت اطلاعات اسلایدرها'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

# --- درباره ما --- #
class AboutUsListView(ListAPIView):
    queryset = AboutUs.objects.all()
    serializer_class = AboutUsSerializer

    @require_api_key
    def get(self, request: Request, *args, **kwargs) -> Response:
        cache = caches['home_cache']
        cache_key = 'about_us'
        cached_data = cache.get(cache_key)

        if cached_data:
            logger.info('دریافت درباره ما از کش')
            return Response(cached_data, status=status.HTTP_200_OK)

        try:
            response = super().get(request, *args, **kwargs)
            cache.set(cache_key, response.data, timeout=3600)
            logger.info('درباره ما دریافت و در کش ذخیره شد')
            return response
        except Exception as e:
            logger.error(f'خطا در دریافت درباره ما: {str(e)}')
            return Response(
                {'error': 'خطا در دریافت اطلاعات'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

# --- تماس با ما --- #
class ContactInfoListView(ListAPIView):
    queryset = ContactInfo.objects.all()
    serializer_class = ContactInfoSerializer

    @require_api_key
    def get(self, request: Request, *args, **kwargs) -> Response:
        cache = caches['home_cache']
        cache_key = 'contact_info'
        cached_data = cache.get(cache_key)

        if cached_data:
            logger.info('دریافت تماس با ما از کش')
            return Response(cached_data, status=status.HTTP_200_OK)

        try:
            response = super().get(request, *args, **kwargs)
            cache.set(cache_key, response.data, timeout=3600)
            logger.info('تماس با ما دریافت و در کش ذخیره شد')
            return response
        except Exception as e:
            logger.error(f'خطا در دریافت تماس با ما: {str(e)}')
            return Response(
                {'error': 'خطا در دریافت اطلاعات'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

# --- گالری --- #
class GallerySectionListView(ListAPIView):
    queryset = GallerySection.objects.all()
    serializer_class = GallerySectionSerializer

    @require_api_key
    def get(self, request: Request, *args, **kwargs) -> Response:
        cache = caches['home_cache']
        cache_key = 'gallery_section'
        cached_data = cache.get(cache_key)

        if cached_data:
            logger.info('دریافت گالری از کش')
            return Response(cached_data, status=status.HTTP_200_OK)

        try:
            response = super().get(request, *args, **kwargs)
            cache.set(cache_key, response.data, timeout=86400)  # 24 ساعت برای گالری
            logger.info('گالری دریافت و در کش ذخیره شد')
            return response
        except Exception as e:
            logger.error(f'خطا در دریافت گالری: {str(e)}')
            return Response(
                {'error': 'خطا در دریافت اطلاعات گالری'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        

class ExpertsListView(ListAPIView):
    queryset = ExpertsModel.objects.all()
    serializer_class = ExpertsSerializer

    @require_api_key
    def get(self, request: Request, *args, **kwargs) -> Response:
        cache = caches['home_cache']
        cache_key = 'experts'
        cached_data = cache.get(cache_key)

        if cached_data:
            logger.info('دریافت متخصصین از کش')
            return Response(cached_data, status=status.HTTP_200_OK)

        try:
            response = super().get(request, *args, **kwargs)
            cache.set(cache_key, response.data, timeout=3600)
            logger.info('متخصصین دریافت و در کش ذخیره شد')
            return response
        except Exception as e:
            logger.error(f'خطا در دریافت متخصصین: {str(e)}')
            return Response(
                {'error': 'خطا در دریافت اطلاعات متخصصین'},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
        

class CatalogDownloadView(APIView):
    permission_classes = [AllowAny]

    @require_api_key
    def get(self, request):
        catalog = Catalog.objects.last()
        if not catalog:
            return Response({'error': 'کاتالوگ یافت نشد'}, status=status.HTTP_404_NOT_FOUND)
        serializer = CatalogSerializer(catalog, context={'request': request})
        return Response(serializer.data, status=status.HTTP_200_OK)