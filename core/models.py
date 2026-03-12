from http import client
from os import link
from re import sub
from unicodedata import category

from PIL.XVThumbImagePlugin import b
from django.db import models

# Create your models here.
class Hero(models.Model):
    year = models.IntegerField()
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=1000)
    image = models.ImageField(upload_to='hero_images/')
    # Hero Stats
    experience = models.IntegerField(default=0)
    companies = models.IntegerField(default=0)
    clients = models.IntegerField(default=0)

    def __str__(self):
        return self.title

class AboutUs(models.Model):
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=255)
    description = models.TextField()
    # Years of Excellence

    # Chairman's Message
    message_title = models.CharField(max_length=100)
    chairman_message = models.TextField()
    chairman_name = models.CharField(max_length=50)
    chairman_title = models.CharField(max_length=50)



    def __str__(self):
        return self.title

    class Meta:
        verbose_name_plural = "About Us"

class Service(models.Model):
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=255)
    

    def __str__(self):
        return self.title
    
class ServiceCard(models.Model):
    icon = models.CharField(max_length=20)  # FontAwesome icon class
    title = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.title
    
class Company(models.Model):
    title = models.CharField(max_length=100)
    subtitle = models.CharField(max_length=255)

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name_plural = "Companies"

class CompanyCard(models.Model):
    tag = models.CharField(max_length=50)
    name = models.CharField(max_length=100)
    description = models.TextField()
    link = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name_plural = "Company Cards"

class GalleryTags(models.Model):
    tags = models.CharField(max_length=50)

    def __str__(self):
        return self.tags
    
    class Meta:
        verbose_name_plural = "Gallery Tags"
    
class GalleryCategory(models.Model):
    category = models.CharField(max_length=50)

    def __str__(self):
        return self.category
    
    class Meta:
        verbose_name_plural = "Gallery Categories"