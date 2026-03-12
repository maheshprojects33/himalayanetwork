from django.shortcuts import render
from django.views.generic import TemplateView, ListView


from .models import *
import re

class Index(TemplateView):
    template_name = 'core/main_page.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['hero'] = Hero.objects.last()  # Get the last hero object
        context['aboutus'] = AboutUs.objects.last()  # Get the last about us object
        context['services'] = Service.objects.last()  # Get the last service object
        context['service_cards'] = ServiceCard.objects.all()  # Get all service cards
        context['company'] = Company.objects.last()  # Get the last company object
        context['company_cards'] = CompanyCard.objects.all()  # Get all company cards
        
        
        # Extract chairman's name and create initials for avatar
        value=AboutUs.objects.last()
        name = (value.chairman_name or "").strip()
        name = re.sub(r'^(Mr\.|Mrs\.|Ms\.|Dr\.|Prof\.|Er\.|Hon\.)\s*', '', name, flags=re.IGNORECASE)

        initials = "".join(word[0].upper()
            for word in name.split()
            if word and word[0].isalpha()      # skip if starts with number/symbol
            )
        
        context['initials'] = initials
        
        return context


class Gallery(TemplateView):
    template_name = 'core/gallery.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['gallery_tags'] = GalleryTags.objects.all()  # Get all gallery tags
        context['gallery_categories'] = GalleryCategory.objects.all()  # Get all gallery categories
        return context

class Trade(TemplateView):
    template_name = 'core/trade.html'

class Companies(TemplateView):
    template_name = 'core/hdf.html'

    