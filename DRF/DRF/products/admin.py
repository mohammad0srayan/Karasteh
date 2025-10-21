from mptt.admin import DraggableMPTTAdmin
from django.contrib import admin
from django.utils.safestring import mark_safe
from .models import Category, Product, ProductImage

# اینلاین برای نمایش عکس‌های محصول
class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 1
    fields = ('image', 'order')
    verbose_name = 'عکس اسلایدی'
    verbose_name_plural = 'عکس‌های اسلایدی'


# ادمین دسته‌بندی با قابلیت درگ و دراپ
@admin.register(Category)
class CategoryAdmin(DraggableMPTTAdmin):
    list_display = ('tree_actions', 'indented_title', 'slug', 'is_active', 'icon_display')
    list_display_links = ('indented_title',)
    list_filter = ('is_active', 'parent')
    search_fields = ('name', 'slug')
    mptt_level_indent = 20
    mptt_indent_field = 'name'
    expand_tree_by_default = False
    fieldsets = (
        (None, {'fields': ('name', 'slug', 'parent', 'order', 'is_active')}),
        ('تصویر', {'fields': ('icon',)}),
    )

    def indented_title(self, obj):
        return obj.get_full_title()
    indented_title.short_description = 'نام کامل دسته‌بندی'

    def icon_display(self, obj):
        if obj.icon:
            return mark_safe(f'<img src="{obj.icon.url}" width="50" height="50" style="object-fit: cover;" />')
        return "-"
    icon_display.short_description = 'آیکون'