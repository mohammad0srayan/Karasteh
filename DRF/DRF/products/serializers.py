from rest_framework import serializers
from .models import Category, Product, ProductImage

# سریالایزر عکس محصول
class ProductImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ['id', 'image', 'order']

# سریالایزر دسته‌بندی
class CategorySerializer(serializers.ModelSerializer):
    icon = serializers.SerializerMethodField()

    def get_icon(self, obj):
        if obj.icon:
            return self.context['request'].build_absolute_uri(obj.icon.url)
        return None

    class Meta:
        model = Category
        fields = ['id', 'name', 'slug', 'is_active', 'icon']
        
        
# سریالایزر لیست محصولات
class ProductListSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.name', read_only=True)
    cover_image = serializers.SerializerMethodField()

    def get_cover_image(self, obj):
        if obj.cover_image:
            return self.context['request'].build_absolute_uri(obj.cover_image.url)
        return None

    class Meta:
        model = Product
        fields = ['id', 'name', 'slug', 'price', 'cover_image', 'category']

# سریالایزر جزئیات محصول
class ProductDetailSerializer(serializers.ModelSerializer):
    category = serializers.CharField(source='category.name', read_only=True)
    images = ProductImageSerializer(many=True, read_only=True)
    cover_image = serializers.SerializerMethodField()
    slug = serializers.CharField(read_only=True)

    def get_cover_image(self, obj):
        if obj.cover_image:
            return self.context['request'].build_absolute_uri(obj.cover_image.url)
        return None

    class Meta:
        model = Product
        fields = ['id', 'name', 'slug', 'price', 'cover_image', 'description', 'category', 'images']

# سریالایزر محصولات صفحه اصلی
class HomeProductSerializer(serializers.ModelSerializer):
    cover_image = serializers.SerializerMethodField()

    def get_cover_image(self, obj):
        if obj.cover_image:
            return self.context['request'].build_absolute_uri(obj.cover_image.url)
        return None

    class Meta:
        model = Product
        fields = ['name', 'slug', 'cover_image']