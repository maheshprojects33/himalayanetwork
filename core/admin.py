from django.contrib import admin
from .models import *


class HeroAdmin(admin.ModelAdmin):
    list_display = ('year', 'title', 'description', 'image')

admin.site.register(Hero, HeroAdmin)

class AboutUsAdmin(admin.ModelAdmin):
    list_display = ('title', 'subtitle', 'description')

admin.site.register(AboutUs, AboutUsAdmin)

class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'subtitle')

admin.site.register(Service, ServiceAdmin)

class ServiceCardAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'icon')

admin.site.register(ServiceCard, ServiceCardAdmin)

class CompanyAdmin(admin.ModelAdmin):
    list_display = ('title', 'subtitle')

admin.site.register(Company, CompanyAdmin)

class CompanyCardAdmin(admin.ModelAdmin):
    list_display = ('name', 'tag', 'description', 'link')

admin.site.register(CompanyCard, CompanyCardAdmin)

class GalleryTagsAdmin(admin.ModelAdmin):
    list_display = ('tags',)

admin.site.register(GalleryTags, GalleryTagsAdmin)

class GalleryCategoryAdmin(admin.ModelAdmin):
    list_display = ('category',)

admin.site.register(GalleryCategory, GalleryCategoryAdmin)