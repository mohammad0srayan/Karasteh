from rest_framework import serializers
from .models import HomeSlider, AboutUs, ContactInfo, GallerySection, GalleryImage, ExpertsModel, Catalog

# --- اسلایدر صفحه اصلی --- #
class HomeSliderSerializer(serializers.ModelSerializer):
    class Meta:
        model = HomeSlider
        fields = ['id', 'image', 'order']


# --- درباره ما --- #
class AboutUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUs
        fields = ['id', 'title', 'description', 'image', 'video', 'order']

# --- تماس با ما --- #
class ContactInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactInfo
        fields = ['id', 'title', 'description', 'phone_number', 'address']

# --- عکس های گالری --- #
class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = ['id', 'image', 'order']

# --- بخش گالری --- #
class GallerySectionSerializer(serializers.ModelSerializer):
    images = GalleryImageSerializer(many=True, read_only=True)

    class Meta:
        model = GallerySection
        fields = ['id', 'title', 'description', 'footer_text', 'images']


class ExpertsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExpertsModel
        fields = ['id', 'name', 'unit', 'phone_number', 'phone', 'telegram_id', 'profile']


class CatalogSerializer(serializers.ModelSerializer):
    pdf_file = serializers.SerializerMethodField()

    def get_pdf_file(self, obj):
        if obj.pdf_file:
            return self.context['request'].build_absolute_uri(obj.pdf_file.url)
        return None

    class Meta:
        model = Catalog
        fields = ['id', 'pdf_file']