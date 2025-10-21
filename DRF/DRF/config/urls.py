from django.contrib import admin
from django.urls import path , include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('ckeditor5/', include('django_ckeditor_5.urls')), 
    path('home/', include('home.urls')),
    path('blog/', include('blog.urls')),
    path('products/', include('products.urls')),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
