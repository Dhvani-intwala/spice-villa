"""
Booking App - Views
----------------
Views for Booking App

"""
from django.shortcuts import render
from django.http import HttpResponse
from .models import Menu
from .models import Category
from .models import Booking
from datetime import date
from .forms import BookingForm
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
    # form = BookingForm()
    if (request.method == 'POST'):
        form = BookingForm(request.POST)
        if (form.is_valid):

            bookingModel = Booking(
                date=form.cleaned_data['date'],
                start_time=form.cleaned_data['start_time'],
                end_time=form.cleaned_data['end_time'],
                table_code=form.cleaned_data['table_code'],
                customer_full_name=form.cleaned_data['customer_full_name'],
                customer_email=form.cleaned_data['customer_email'],
                book_on_user=form.cleaned_data['book_on_user']
            )
            bookingModel.save()
            return redirect('index.html')

    else:
        form = BookingForm()

    return render(request, 'mybookings.html', {'form': form})


def date_picker_view(request):
    form = BookingForm()
    return render(request, 'mybookings.html', {'form': form})
