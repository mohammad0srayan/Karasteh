import re
from django.db import models
from django.utils import timezone
from django.utils.text import slugify
from django_ckeditor_5.fields import CKEditor5Field
from mptt.models import MPTTModel, TreeForeignKey

# مدل دسته‌بندی با ساختار درختی
class Category(MPTTModel):
    name = models.CharField(max_length=100, verbose_name='نام دسته‌بندی')
    slug = models.SlugField(max_length=200, unique=True, allow_unicode=True, verbose_name='اسلاگ')
    parent = TreeForeignKey('self', on_delete=models.CASCADE, null=True, blank=True, related_name='children', verbose_name='دسته‌بندی والد')
    order = models.PositiveIntegerField(default=1, verbose_name='ترتیب نمایش')
    icon = models.ImageField(upload_to='categories/icons/', null=True, blank=True, verbose_name='آیکون دسته‌بندی')
    is_active = models.BooleanField(default=True, verbose_name='فعال')

    def __str__(self):
        return self.name

    def get_full_title(self):
        ancestors = self.get_ancestors(include_self=True)
        return " -> ".join([ancestor.name for ancestor in ancestors])

    def save(self, *args, **kwargs):
        is_new = self._state.adding
        if not self.slug:
            raise ValueError("اسلاگ باید به صورت دستی وارد شود")
        if not re.match(r'^[\w\s\-\u0600-\u06FF]+$', self.slug):
            raise ValueError("اسلاگ فقط می‌تواند شامل حروف فارسی، انگلیسی، اعداد، خط تیره و زیرخط باشد")
        if is_new and Category.objects.filter(slug=self.slug).exists():
            raise ValueError("اسلاگ وارد شده قبلاً استفاده شده است")
        elif not is_new and Category.objects.filter(slug=self.slug).exclude(id=self.id).exists():
            raise ValueError("اسلاگ وارد شده قبلاً استفاده شده است")
        super().save(*args, **kwargs)

    class MPTTMeta:
        order_insertion_by = ['order', 'name']

    class Meta:
        verbose_name = 'دسته‌بندی'
        verbose_name_plural = 'دسته‌بندی‌ها'

# مدل محصول
class Product(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products', verbose_name='دسته‌بندی')
    name = models.CharField(max_length=400, verbose_name='نام محصول')
    slug = models.SlugField(max_length=255, unique=True, allow_unicode=True, verbose_name='اسلاگ محصول')
    price = models.PositiveBigIntegerField(null=True, blank=True, verbose_name='قیمت (تومان)')
    cover_image = models.ImageField(upload_to='products/covers/', null=True, blank=True, verbose_name='عکس کاور')
    description = CKEditor5Field(verbose_name='توضیحات')


    def save(self, *args, **kwargs):
        if not self.slug and self.name:
            base_slug = slugify(self.name, allow_unicode=True)
            slug = base_slug[:255]
            counter = 1
            while Product.objects.filter(slug=slug).exclude(id=self.id).exists():
                slug = f"{base_slug[:250]}-{counter}"[:255]
                counter += 1
            self.slug = slug
        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'محصول'
        verbose_name_plural = 'محصولات'

# مدل عکس محصول
class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images', verbose_name='محصول')
    image = models.ImageField(upload_to='products/slides/', verbose_name='عکس اسلایدی')
    order = models.PositiveIntegerField(default=0, verbose_name='ترتیب نمایش')

    def __str__(self):
        return f"عکس {self.order} برای {self.product.name}"

    class Meta:
        verbose_name = 'عکس محصول'
        verbose_name_plural = 'عکس‌های محصول'
        ordering = ['order']