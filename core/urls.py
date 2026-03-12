from django.urls import path
from . import views

urlpatterns = [
    path('', views.Index.as_view(), name='index'),
    path('gallery/', views.Gallery.as_view(), name='gallery'),
    path('trade/', views.Trade.as_view(), name='trade'),
    path('hdf/', views.Companies.as_view(), name='hdf'),
]