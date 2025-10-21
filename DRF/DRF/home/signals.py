import logging
from django.core.cache import caches
from django.dispatch import receiver
from django.db.models.signals import post_save, post_delete
from .models import HomeSlider, AboutUs, ContactInfo, GallerySection, GalleryImage, ExpertsModel

logger = logging.getLogger('home')

@receiver([post_save, post_delete], sender=HomeSlider)
def clear_home_slider_cache(sender, instance, **kwargs):
    cache = caches['home_cache']
    cache_key = 'home_sliders'
    cache.delete(cache_key)
    logger.info(f'کش اسلایدرهای صفحه اصلی به دلیل تغییر در {sender.__name__} پاک شد')

@receiver([post_save, post_delete], sender=AboutUs)
def clear_about_us_cache(sender, instance, **kwargs):
    cache = caches['home_cache']
    cache_key = 'about_us'
    cache.delete(cache_key)
    logger.info(f'کش درباره ما به دلیل تغییر در {sender.__name__} پاک شد')

@receiver([post_save, post_delete], sender=ContactInfo)
def clear_contact_info_cache(sender, instance, **kwargs):
    cache = caches['home_cache']
    cache_key = 'contact_info'
    cache.delete(cache_key)
    logger.info(f'کش تماس با ما به دلیل تغییر در {sender.__name__} پاک شد')

@receiver([post_save, post_delete], sender=GallerySection)
@receiver([post_save, post_delete], sender=GalleryImage)
def clear_gallery_cache(sender, instance, **kwargs):
    cache = caches['home_cache']
    cache_key = 'gallery_section'
    cache.delete(cache_key)
    logger.info(f'کش گالری به دلیل تغییر در {sender.__name__} پاک شد')

@receiver([post_save, post_delete], sender=ExpertsModel)
def clear_experts_cache(sender, instance, **kwargs):
    cache = caches['home_cache']
    cache_key = 'experts'
    cache.delete(cache_key)
    logger.info(f'کش متخصصین به دلیل تغییر در {sender.__name__} پاک شد')