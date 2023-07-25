"""
Booking App - Views
----------------
Views for Booking App

"""
from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from .models import Menu
from .models import Category
from .models import Booking
from .models import Table
from datetime import date
from django.contrib import messages
from .forms import BookingForm
import os
import datetime
from django.core.mail import send_mail


def home(request):
    """The view for the start page. Renders the index.html
    page which also extends the base.html
    """
    # store_data()
    instances = Menu.objects.all()
    return render(request, 'index.html', {'menu_data': instances})


def error_base(request, Exception):
    """
    """
    return render(request, 'error_base.html')


def booking(request):
    """
    A view that provides a form to the user that creates a Booking entry
    """
    # form = BookingForm()
    tables = Table.objects.all()
    # Put a dates & time condition
    bookings = Booking.objects.all()

    occupied_table = [booking.table.code for booking in bookings]

    if (request.method == 'POST'):
        form = BookingForm(request.POST)
        if (form.is_valid()):
            print(request.POST)
            print(form.cleaned_data['date'])
            table_obj = Table.objects.get(code=form.cleaned_data['table_code'])
            name = form.cleaned_data['customer_full_name']
            email = form.cleaned_data['customer_email']
            if (form.cleaned_data['book_on_user']):
                name = request.user.username
                email = request.user.email
                print(name, email)

            bookingModel = Booking(
                date=form.cleaned_data['date'],
                start_time=form.cleaned_data['start_time'],
                end_time=form.cleaned_data['end_time'],
                table=table_obj,
                customer_full_name=name,
                customer_email=email,
                created_on=datetime.datetime.now(),
                created_by=request.user

            )
            try:
                bookingModel.save()

                # send_mail(
                #     subject='Your booking is confirmed',
                #     message='Your booking time is ' +
                #     form.cleaned_data['start_time'] +
                #     'undername ' + str(str()name) + '.',
                #     from_email='intdhvani2627@gmail.com',
                #     recipient_list=[str(str(e).strip()mail).strip()],
                #     fail_silently=False
                # )
                # print('success')
            except Exception as e:
                print(e)
            # s
            # messages.success(request, 'Booking is confirmed')
            # return redirect('/mybooking/')

    else:
        form = BookingForm()

    return render(request, 'booking.html', {'form': form, 'tables': tables,
                                            'occupied_tables': occupied_table})


def delete_booking(request, pk):
    booking = get_object_or_404(Booking, pk=pk)
    booking.delete()
    messages.success(request, 'Booking has been deleted')
    return redirect('/mybooking/')


def booking_list_admin(request):
    data = Booking.objects.filter(created_by=request.user)

    return render(request, 'mybookings.html', {'data': data})
