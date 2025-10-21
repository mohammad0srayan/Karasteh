from django.db.models.signals import post_save, post_delete
from django.dispatch import receiver
from django.core.cache import cache
import logging
from .models import BlogPost

logger = logging.getLogger('blog')

@receiver(post_save, sender=BlogPost)
def clear_cache_on_save(sender, instance, **kwargs):
    cache_keys = cache.get('all_cache_keys', set())
    cache_keys.update([
        f'blog:post:{instance.slug}',
        'blog:latest_posts',
        'blog:categories',
        'blog:home_posts',  # اضافه کردن کلید جدید
    ])
    if instance.category:
        cache_keys.add(f'blog:category:{instance.category.slug}')
    cache.delete_many(cache_keys)
    cache.delete('all_cache_keys')
    logger.info(f"بلاگ: کش پاک شد پس از ذخیره پست '{instance.title}'")

@receiver(post_delete, sender=BlogPost)
def clear_cache_on_delete(sender, instance, **kwargs):
    cache_keys = cache.get('all_cache_keys', set())
    cache_keys.update([
        f'blog:post:{instance.slug}',
        'blog:latest_posts',
        'blog:categories',
        'blog:home_posts',  # اضافه کردن کلید جدید
    ])
    if instance.category:
        cache_keys.add(f'blog:category:{instance.category.slug}')
    cache.delete_many(cache_keys)
    cache.delete('all_cache_keys')
    logger.info(f"بلاگ: کش پاک شد پس از حذف پست '{instance.title}'")