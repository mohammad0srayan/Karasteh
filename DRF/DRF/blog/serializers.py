from rest_framework import serializers
from .models import BlogCategory, BlogPost
from .utils import get_relative_time

class BlogCategorySerializer(serializers.ModelSerializer):
    children = serializers.SerializerMethodField()
    parent_slug = serializers.SerializerMethodField()

    class Meta:
        model = BlogCategory
        fields = ('id', 'title', 'slug', 'children', 'parent_slug')

    def get_children(self, obj):
        children = obj.children.filter(is_active=True)
        serializer = BlogCategorySerializer(children, many=True)
        return serializer.data

    def get_parent_slug(self, obj):
        parent = obj.get_ancestors(ascending=False, include_self=False).first()
        return parent.slug if parent else obj.slug

class BlogPostListSerializer(serializers.ModelSerializer):
    jalali_created = serializers.SerializerMethodField()
    created_at_relative = serializers.SerializerMethodField()
    category = BlogCategorySerializer(read_only=True)

    class Meta:
        model = BlogPost
        fields = [
            'id', 'title', 'slug', 'reading_time', 'thumbnail', 'introduction',
            'jalali_created', 'created_at_relative', 'category'
        ]

    def get_jalali_created(self, obj):
        return obj.jalali_created.strftime("%Y/%m/%d")

    def get_created_at_relative(self, obj):
        return get_relative_time(obj.created_at)

class BlogPostDetailSerializer(serializers.ModelSerializer):
    jalali_created = serializers.SerializerMethodField()
    jalali_updated = serializers.SerializerMethodField()
    category = BlogCategorySerializer(read_only=True)

    class Meta:
        model = BlogPost
        fields = [
            'id', 'title', 'slug', 'reading_time', 'thumbnail', 'introduction', 'content',
            'jalali_created', 'jalali_updated', 'is_active', 'category'
        ]

    def get_jalali_created(self, obj):
        return obj.jalali_created.strftime("%Y/%m/%d")

    def get_jalali_updated(self, obj):
        return obj.jalali_updated.strftime("%Y/%m/%d")
    
    