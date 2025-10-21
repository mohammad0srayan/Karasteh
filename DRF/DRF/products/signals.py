import logging
from django.core.cache import caches
from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver
from .models import Category, Product, ProductImage

logger = logging.getLogger('product')
product_cache = caches['product_cache']

# پاک کردن کش دسته‌بندی‌ها هنگام تغییر
@receiver([post_save, post_delete], sender=Category)
def clear_category_cache(sender, instance, **kwargs):
    cache_keys = ['category_tree']
    product_cache.delete_many(cache_keys)
    logger.info(f'کش دسته‌بندی‌ها به دلیل تغییر در {sender.__name__} (آیکون یا سایر فیلدها) پاک شد')
    
    
# پاک کردن کش محصولات و لیست محصولات
@receiver([post_save, post_delete], sender=Product)
@receiver([post_save, post_delete], sender=ProductImage)
def clear_product_cache(sender, instance, **kwargs):
    product_cache.delete('home_products')
    product_cache.clear()  # پاک کردن کل کش برای فیلترها و جزئیات محصولات
    logger.info(f'کش محصولات و لیست محصولات به دلیل تغییر در {sender.__name__} پاک شد')