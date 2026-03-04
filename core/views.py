from django.shortcuts import render
from django.views.generic import TemplateView

class Index(TemplateView):
    template_name = 'base/index.html'


class Gallery(TemplateView):
    template_name = 'base/gallery.html'

