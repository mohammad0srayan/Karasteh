import re
import pytz
import jdatetime
from django import forms

from django.contrib import admin
from django.core.cache import cache
from django.utils.html import format_html
from mptt.admin import DraggableMPTTAdmin
from .models import BlogCategory, BlogPost


class BlogPostForm(forms.ModelForm):
    class Meta:
        model = BlogPost
        fields = '__all__'
        help_texts = {
            'slug': 'اسلاگ باید به صورت دستی وارد شود و می‌تواند شامل حروف فارسی، انگلیسی، اعداد، خط تیره یا زیرخط باشد.'
        }

    def clean_slug(self):
        slug = self.cleaned_data.get('slug')
        if not re.match(r'^[\w\s\-\u0600-\u06FF]+$', slug):
            raise forms.ValidationError("اسلاگ فقط می‌تواند شامل حروف فارسی، انگلیسی، اعداد، خط تیره و زیرخط باشد")
        # چک کردن یکتایی اسلاگ
        instance = self.instance
        if instance.pk and BlogPost.objects.filter(slug=slug).exclude(pk=instance.pk).exists():
            raise forms.ValidationError("اسلاگ وارد شده قبلاً استفاده شده است.")
        elif not instance.pk and BlogPost.objects.filter(slug=slug).exists():
            raise forms.ValidationError("اسلاگ وارد شده قبلاً استفاده شده است.")
        return slug

@admin.register(BlogCategory)
class BlogCategoryAdmin(DraggableMPTTAdmin):
    list_display = ('tree_actions', 'indented_title', 'slug', 'is_active')
    list_display_links = ('indented_title',)
    list_filter = ('is_active', 'parent')
    search_fields = ('title', 'slug')
    prepopulated_fields = {'slug': ('title',)}
    actions = ['revalidate_menu']

    def revalidate_menu(self, request, queryset):
        cache.delete('blog_categories')
        cache.delete('all_cache_keys')
        self.message_user(request, "کش منوی دسته‌بندی‌ها پاک شد.")
    revalidate_menu.short_description = "پاک کردن کش منوی دسته‌بندی‌ها"

@admin.register(BlogPost)
class BlogPostAdmin(admin.ModelAdmin):
    form = BlogPostForm
    list_display = ('title', 'show_thumbnail', 'category', 'reading_time', 'is_active', 'jalali_created_at')
    list_filter = ('is_active', 'category', 'created_at')
    search_fields = ('title', 'content')
    ordering = ('-created_at',)
    list_editable = ('is_active',)
    readonly_fields = ('jalali_created_at', 'jalali_updated_at')
    prepopulated_fields = {'slug': ('title',)}

    fieldsets = (
        (None, {
            'fields': ('category', 'thumbnail', 'title', 'slug', 'reading_time', 'introduction', 'content', 'is_active')
        }),
        ('تاریخ‌ها', {
            'fields': ('jalali_created_at', 'jalali_updated_at'),
            'classes': ('collapse',)
        }),
    )

    def show_thumbnail(self, obj):
        if obj.thumbnail:
            return format_html('<img src="{}" style="max-height: 100px;" />', obj.thumbnail.url)
        return 'بدون تصویر'
    show_thumbnail.short_description = 'تصویر کاور'

    def jalali_created_at(self, obj):
        tehran_tz = pytz.timezone('Asia/Tehran')
        tehran_time = obj.created_at.astimezone(tehran_tz)
        j_date = jdatetime.datetime.fromgregorian(datetime=tehran_time)
        return j_date.strftime("%Y/%m/%d %H:%M:%S")
    jalali_created_at.short_description = 'تاریخ ایجاد'

    def jalali_updated_at(self, obj):
        tehran_tz = pytz.timezone('Asia/Tehran')
        tehran_time = obj.updated_at.astimezone(tehran_tz)
        j_date = jdatetime.datetime.fromgregorian(datetime=tehran_time)
        return j_date.strftime("%Y/%m/%d %H:%M:%S")
    jalali_updated_at.short_description = 'تاریخ بروزرسانی'

    