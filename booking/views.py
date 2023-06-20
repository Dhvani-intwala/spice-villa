"""
Booking App - Views
----------------
Views for Booking App

"""
from django.shortcuts import render
from django.http import HttpResponse

# from .models import Booking
# from .models import Table


def index_view(request):
    return render(request, 'index.html')


def base_view(request):
    return render(request, 'base.html')


# class Booking(Login):
"""
#  template_name = 'booking.html'
# model = Table
"""
