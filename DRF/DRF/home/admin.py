from django.contrib import admin
from django.utils.html import format_html
from .models import HomeSlider, AboutUs, ContactInfo, GallerySection, GalleryImage, ExpertsModel, Catalog

@admin.register(HomeSlider)
class HomeSliderAdmin(admin.ModelAdmin):
    list_display = ('show_image', 'order')

    ordering = ('order',)
    list_editable = ('order',)

    fieldsets = (
        (None, {
            'fields': ('image', 'order')
        }),
    )

    def show_image(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="max-height: 100px;" />', obj.image.url)
        return 'بدون تصویر'
    show_image.short_description = 'تصویر'

    def get_queryset(self, request):
        return super().get_queryset(request).select_related()


@admin.register(AboutUs)
class AboutUsAdmin(admin.ModelAdmin):
    list_display = ['title', 'order', 'image_preview', 'video']
    list_editable = ['order']
    search_fields = ['title', 'description']
    list_filter = ['order']
    ordering = ['order']

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="100" height="auto" />', obj.image.url)
        return "بدون تصویر"
    image_preview.short_description = "پیش‌نمایش تصویر"


@admin.register(ContactInfo)
class ContactInfoAdmin(admin.ModelAdmin):
    list_display = ['title', 'phone_number', 'address']
    search_fields = ['title', 'description', 'phone_number', 'address']

class GalleryImageInline(admin.TabularInline):
    model = GalleryImage
    extra = 1
    fields = ['image', 'image_preview', 'order']
    readonly_fields = ['image_preview']
    ordering = ['order']

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="100" height="auto" />', obj.image.url)
        return "بدون تصویر"
    image_preview.short_description = "پیش‌نمایش تصویر"

@admin.register(GallerySection)
class GallerySectionAdmin(admin.ModelAdmin):
    list_display = ['title', 'id']
    search_fields = ['title', 'description']
    inlines = [GalleryImageInline]


class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ['section', 'image_preview', 'order']
    list_editable = ['order']
    search_fields = ['section__title']
    list_filter = ['section']
    ordering = ['order']

    def image_preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" width="100" height="auto" />', obj.image.url)
        return "بدون تصویر"
    image_preview.short_description = "پیش‌نمایش تصویر"

@admin.register(ExpertsModel)
class ExpertsModelAdmin(admin.ModelAdmin):
    list_display = ('name', 'unit', 'phone', 'phone_number', 'telegram_id', 'get_image_preview')
    list_filter = ('unit',)
    search_fields = ('name', 'unit', 'phone', 'phone_number', 'telegram_id')
    list_per_page = 20
    ordering = ('name',)

    def get_image_preview(self, obj):
        if obj.profile:
            return format_html('<img src="{}" style="max-height: 50px; max-width: 50px;" />', obj.profile.url)
        return "-"
    get_image_preview.short_description = 'پیش‌نمایش تصویر'

    fieldsets = (
        (None, {
            'fields': ('name', 'unit', 'phone', 'phone_number', 'telegram_id', 'profile')
        }),
    )


# ادمین کاتالوگ
@admin.register(Catalog)
class CatalogAdmin(admin.ModelAdmin):
    list_display = ['id', 'pdf_file']
    search_fields = ['pdf_file']
    fields = ['pdf_file']
    verbose_name = 'کاتالوگ'
    verbose_name_plural = 'کاتالوگ'