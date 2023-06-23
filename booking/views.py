"""
Booking App - Views
----------------
Views for Booking App

"""
from django.shortcuts import render
from django.http import HttpResponse

# from .models import Booking
# from .models import Table


def base_view(request):
    return render(request, 'index.html')
