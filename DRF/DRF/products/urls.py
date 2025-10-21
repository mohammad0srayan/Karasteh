from django.urls import path
from .views import CategoryTreeView, ProductListView, ProductDetailView, HomeProductView, ProductSearchView

app_name = 'products'

urlpatterns = [
    path('categories/', CategoryTreeView.as_view(), name='category-tree'),
    path('', ProductListView.as_view(), name='product-list'),
    path('products/<str:slug>/', ProductDetailView.as_view(), name='product-detail'),
    path('home/', HomeProductView.as_view(), name='home-products'),
    path('search/', ProductSearchView.as_view(), name='product-search'),
]