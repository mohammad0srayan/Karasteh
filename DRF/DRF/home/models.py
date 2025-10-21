from django.db import models
from django.core.exceptions import ValidationError
from django_ckeditor_5.fields import CKEditor5Field


# --- اسلایدر صفحه اصلی --- #
class HomeSlider(models.Model):
    image = models.ImageField(upload_to='home/sliders/', blank=True, null=True, verbose_name="تصویر")
    order = models.PositiveIntegerField(default=1, verbose_name="ترتیب نمایش")

    class Meta:
        verbose_name = "اسلایدر صفحه اصلی"
        verbose_name_plural = "اسلایدرهای صفحه اصلی"
        ordering = ['order']  
        indexes = [
            models.Index(fields=['order']), 
        ]

    def __str__(self):
        return f"اسلایدر با ترتیب {self.order}"


# --- درباره ما --- #
class AboutUs(models.Model):
    title = models.CharField(max_length=250, verbose_name="عنوان", blank=True, null=True)
    description = CKEditor5Field(verbose_name="توضیحات", blank=True, null=True)
    image = models.ImageField(upload_to='home/about_us/', verbose_name="تصویر", blank=True, null=True)
    video = models.FileField(upload_to='home/about_us/', verbose_name="ویدیو", blank=True, null=True)
    order = models.PositiveIntegerField(default=1, verbose_name="ترتیب نمایش")

    def clean(self):
        if self.image and self.video:
            raise ValidationError("نمی‌توانید همزمان تصویر و ویدیو آپلود کنید.")

    class Meta:
        verbose_name = "درباره ما"
        verbose_name_plural = "درباره ما"
        ordering = ['order']
        indexes = [
            models.Index(fields=['order']),
        ]

    def __str__(self):
        return self.title or f"درباره ما {self.id}"

# --- تماس با ما --- #
class ContactInfo(models.Model):
    title = models.CharField(max_length=250, verbose_name="عنوان", blank=True, null=True)
    description = CKEditor5Field(verbose_name="توضیحات", blank=True, null=True)
    phone_number = models.CharField(max_length=20, verbose_name="شماره تماس", blank=True, null=True)
    address = models.CharField(max_length=500, verbose_name="آدرس", blank=True, null=True)

    class Meta:
        verbose_name = "تماس با ما"
        verbose_name_plural = "اطلاعات تماس"

    def __str__(self):
        return self.title or "تماس با ما"

# --- بخش گالری --- #
class GallerySection(models.Model):
    title = models.CharField(max_length=300, verbose_name="عنوان", blank=True, null=True)
    description = CKEditor5Field(verbose_name="توضیحات", blank=True, null=True)
    footer_text = CKEditor5Field(verbose_name="متن پایانی", blank=True, null=True)

    class Meta:
        verbose_name = "گالری"
        verbose_name_plural = "گالری"
        ordering = ['id']

    def __str__(self):
        return self.title or f"بخش گالری {self.id}"

# --- عکس های گالری --- #
class GalleryImage(models.Model):
    section = models.ForeignKey(GallerySection, on_delete=models.CASCADE, related_name='images', verbose_name="بخش گالری")
    image = models.ImageField(upload_to='home/gallery/images/', verbose_name="عکس")
    order = models.PositiveIntegerField(default=1, verbose_name="ترتیب نمایش")

    class Meta:
        verbose_name = "تصویر گالری"
        verbose_name_plural = "تصاویر گالری"
        ordering = ['order']
        indexes = [
            models.Index(fields=['order']),
        ]

    def __str__(self):
        return f"تصویر گالری {self.id}"
    
    
class ExpertsModel(models.Model):
    name = models.CharField(max_length=100, verbose_name="اسم")
    unit = models.CharField(max_length=100, blank=True, null=True, verbose_name="واحد")
    phone_number = models.CharField(max_length=20,blank=True, null=True,  verbose_name="شماره ثابت")
    phone = models.CharField(max_length=20, blank=True, null=True, verbose_name="شماره تلفن همراه")
    telegram_id = models.CharField(max_length=100,blank=True, null=True, verbose_name="آیدی تلگرام")
    profile = models.ImageField(upload_to="home/experts", verbose_name="تصویر")

    class Meta:
        verbose_name = "متخصص"
        verbose_name_plural = "متخصصین"

    def __str__(self):
        return self.name

class Catalog(models.Model):
    pdf_file = models.FileField(upload_to='catalogs/', verbose_name='فایل PDF کاتالوگ')

    def __str__(self):
        return f"کاتالوگ {self.id}"

    class Meta:
        verbose_name = 'کاتالوگ'
        verbose_name_plural = 'کاتالوگ'