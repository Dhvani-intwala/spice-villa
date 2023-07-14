"""
Booking App - Views
----------------
Views for Booking App

"""
from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import Menu
from .models import Category
from .models import Booking
from .models import Table
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
        print('here')
        form = BookingForm(request.POST)
        if (form.is_valid()):
            print(request.POST)
            print(form.cleaned_data['date'])
            table_obj = Table(code=form.cleaned_data['table_code'])
            table_obj.save()
            user = request.user
            if (form.cleaned_data['book_on_user'] == 'on'):
                user = form.cleaned_data['customer_full_name']
            bookingModel = Booking(
                date=form.cleaned_data['date'],
                start_time=form.cleaned_data['start_time'],
                end_time=form.cleaned_data['end_time'],
                table=table_obj,
                customer_full_name=form.cleaned_data['customer_full_name'],
                customer_email=form.cleaned_data['customer_email'],
                created_on=datetime.datetime.now(),
                created_by=user

            )
            bookingModel.save()

            return redirect('index.html')

    else:
        form = BookingForm()

    return render(request, 'mybookings.html', {'form': form})


def booking_list_admin(request):
    data = Booking.objects.filter(created_by=request.user)
    return render(request, 'managebookings.html', {'data': data})
