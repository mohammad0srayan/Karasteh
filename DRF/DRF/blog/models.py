import re
import pytz
import logging
import jdatetime
from datetime import datetime
from django.db import models
from django.core.cache import cache
from mptt.models import MPTTModel, TreeForeignKey
from django_ckeditor_5.fields import CKEditor5Field
from .utils import get_relative_time


logger = logging.getLogger('blog')

class BlogCategory(MPTTModel):
    title = models.CharField(max_length=100, verbose_name="عنوان")
    slug = models.SlugField(max_length=200, unique=True, allow_unicode=True, verbose_name="اسلاگ")
    parent = TreeForeignKey('self', null=True, blank=True, on_delete=models.CASCADE,
                            related_name='children', verbose_name="دسته والد")
    order = models.PositiveIntegerField(default=0, verbose_name="ترتیب نمایش")
    is_active = models.BooleanField(default=True, verbose_name="فعال")

    def get_full_title(self):
        ancestors = self.get_ancestors(include_self=True)
        return " -> ".join([ancestor.title for ancestor in ancestors])

    class MPTTMeta:
        order_insertion_by = ['order', 'title']

    class Meta:
        verbose_name = "دسته‌بندی بلاگ"
        verbose_name_plural = "دسته‌بندی‌های بلاگ"

    def __str__(self):
        return self.title

def blog_upload_to(instance, filename):
    """تولید مسیر ذخیره‌سازی تصاویر بلاگ بر اساس سال و ماه"""
    if instance.created_at:
        year = instance.created_at.year
        month = instance.created_at.month
    else:
        # استفاده از تاریخ فعلی اگه created_at هنوز None باشه
        now = datetime.now()
        year = now.year
        month = now.month
    return f'blog/content/{year}/{month}/{filename}'

def blog_thumbnail_upload_to(instance, filename):
    """تولید مسیر ذخیره‌سازی تصاویر کاور بلاگ بر اساس سال و ماه"""
    if instance.created_at:
        year = instance.created_at.year
        month = instance.created_at.month
    else:
        # استفاده از تاریخ فعلی اگه created_at هنوز None باشه
        now = datetime.now()
        year = now.year
        month = now.month
    return f'blog/thumbnails/{year}/{month}/{filename}'

class BlogPost(models.Model):
    title = models.CharField(max_length=3000, verbose_name="عنوان")
    slug = models.TextField(
        verbose_name="اسلاگ",
        help_text="اسلاگ باید به صورت دستی وارد شود و می‌تواند شامل حروف فارسی، انگلیسی، اعداد، خط تیره یا زیرخط باشد."
    )
    reading_time = models.CharField(max_length=50, verbose_name="زمان مطالعه", blank=True, null=True)
    thumbnail = models.ImageField(upload_to=blog_thumbnail_upload_to, verbose_name="تصویر کاور")
    introduction = models.TextField(blank=True, null=True, verbose_name="مقدمه")
    content = CKEditor5Field(verbose_name="محتوا", config_name='default')
    is_active = models.BooleanField(default=True, verbose_name="وضعیت نمایش")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="تاریخ ایجاد")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="تاریخ بروزرسانی")
    category = models.ForeignKey(
        BlogCategory,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name='posts',
        verbose_name="دسته‌بندی"
    )

    class Meta:
        verbose_name = "پست بلاگ"
        verbose_name_plural = "پست‌های بلاگ"
        ordering = ['-created_at']

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        is_new = self._state.adding
        old_is_active = None
        old_category = None
        if not is_new:
            try:
                old_instance = BlogPost.objects.get(id=self.id)
                old_is_active = old_instance.is_active
                old_category = old_instance.category
            except BlogPost.DoesNotExist:
                pass

        # اعتبارسنجی اسلاگ
        if not self.slug:
            raise ValueError("اسلگ باید به صورت دستی وارد شود")
        if not re.match(r'^[\w\s\-\u0600-\u06FF]+$', self.slug):
            raise ValueError("اسلگ فقط می‌تواند شامل حروف فارسی، انگلیسی، اعداد، خط تیره و زیرخط باشد")
        # چک کردن یکتایی اسلاگ
        if is_new and BlogPost.objects.filter(slug=self.slug).exists():
            raise ValueError("اسلاگ وارد شده قبلاً استفاده شده است.")
        elif not is_new and BlogPost.objects.filter(slug=self.slug).exclude(id=self.id).exists():
            raise ValueError("اسلاگ وارد شده قبلاً استفاده شده است.")

        super().save(*args, **kwargs)

        # پاک کردن کش در صورت تغییر وضعیت یا دسته‌بندی
        if old_is_active != self.is_active or old_category != self.category:
            self._clear_related_cache()
            logger.info(f"بلاگ: وضعیت نمایش یا دسته‌بندی پست '{self.title}' تغییر کرد - کش پاک شد")
        elif is_new:
            self._clear_related_cache()
            logger.info(f"بلاگ: پست جدید '{self.title}' ایجاد شد - کش پاک شد")

        action = "ایجاد" if is_new else "بروزرسانی"
        logger.info(f"بلاگ: {action} پست - عنوان: '{self.title}'")

    def _clear_related_cache(self):
        cache_keys = cache.get('all_cache_keys', set())
        cache_keys.update([
            f'blog:post:{self.slug}',
            'blog:latest_posts',
            'blog:categories',
        ])
        if self.category:
            cache_keys.add(f'blog:category:{self.category.slug}')
        cache.delete_many(cache_keys)
        cache.delete('all_cache_keys')
        logger.info(f"بلاگ: کش‌های مرتبط با پست '{self.title}' پاک شدند")

    @property
    def jalali_created(self):
        tehran_tz = pytz.timezone('Asia/Tehran')
        tehran_time = self.created_at.astimezone(tehran_tz)
        return jdatetime.datetime.fromgregorian(datetime=tehran_time)

    @property
    def jalali_updated(self):
        tehran_tz = pytz.timezone('Asia/Tehran')
        tehran_time = self.updated_at.astimezone(tehran_tz)
        return jdatetime.datetime.fromgregorian(datetime=tehran_time)

    def get_relative_time(self):
        return get_relative_time(self.created_at)
    
  