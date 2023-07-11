"""
Booking App - Views
----------------
Views for Booking App

"""
from django.shortcuts import render
from django.http import HttpResponse
from .models import Menu
from .models import Category
from datetime import date
import os
import datetime


def home(request):
    """The view for the start page. Renders the index.html
    page which also extends the base.html
    """
    # store_data()
    instances = Menu.objects.all()
    return render(request, 'index.html', {'menu_data': instances})


def booking(request):
    """
    A view that provides a form to the user that creates a Booking entry
    """

    return render(request, 'mybookings.html')
