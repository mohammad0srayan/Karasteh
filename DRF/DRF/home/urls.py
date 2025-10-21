from django.urls import path
from .views import HomeSliderListView, AboutUsListView, ContactInfoListView, GallerySectionListView, ExpertsListView, CatalogDownloadView

urlpatterns = [
    path('sliders/', HomeSliderListView.as_view(), name='home-slider-list'),
    path('about-us/', AboutUsListView.as_view(), name='about-us'),
    path('contact-info/', ContactInfoListView.as_view(), name='contact-info'),
    path('gallery/', GallerySectionListView.as_view(), name='gallery'),
    path('experts/', ExpertsListView.as_view(), name='experts'),
    path('catalog/download/', CatalogDownloadView.as_view(), name='catalog-download'),
]
