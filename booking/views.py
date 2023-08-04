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
from django.utils.timezone import now, localtime



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


def booking(request, pk = None):
    """
    A view that provides a form to the user that creates a Booking entry
    """
    # form = BookingForm()
    
    def finish_all_completed_booking():
        bookings_all = Booking.objects.all()

        for booking in bookings_all:
            
            if(booking.date < datetime.date.today()):
                booking.delete()
                continue
            elif(booking.date == datetime.date.today()):
                if(booking.end_time < localtime().time()):
                    booking.delete()
                    continue
    finish_all_completed_booking()
    tables = Table.objects.all()
    bookings = Booking.objects.all()
    occupied_table = [booking.table.code for booking in bookings]

    if (request.method == 'POST'):
        if('new form' in request.POST):
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
                except Exception as e:
                    print(e)
                messages.success(request, 'Booking is confirmed')
                return redirect('/mybooking/')
        elif('edit form' in request.POST): 
            form = BookingForm(request.POST)
            if(form.is_valid()):
                print(request.POST.get('primary-key'))
                booking = get_object_or_404(Booking, pk=request.POST.get('primary-key'))
                table_obj = Table.objects.get(code=form.cleaned_data['table_code'])
                booking.date = form.cleaned_data['date']
                print(form.cleaned_data['date'])
                booking.start_time = form.cleaned_data['start_time']
                booking.end_time = form.cleaned_data['end_time']
                booking.table = table_obj
                booking.customer_full_name= form.cleaned_data['customer_full_name']
                booking.customer_email=form.cleaned_data['customer_email']
            else:
                print('here i am')
            try:
                booking.save()
            except Exception as e:
                print(e)
            messages.success(request, 'Booking is edited')
            return redirect('/mybooking/')

    else:
        if pk != None:
            isEdit = True
            print('pk true')
            booking = get_object_or_404(Booking, pk=pk)
            form = BookingForm(initial = {'date':booking.date,
                                'start_time':booking.start_time,
                                'end_time':booking.end_time,
                                'table_code':booking.table.code,
                                'customer_full_name':booking.customer_full_name,
                                'customer_email':booking.customer_email })
        else:
            isEdit = False
            form = BookingForm(initial = {'date': datetime.date.today()})

    return render(request, 'booking.html', {'form': form, 'tables': tables,
                                            'occupied_tables': occupied_table,
                                            'edit_page':isEdit,'data':pk})

def delete_booking(request, pk):
    """
    The view that performs the deletion of a booking.
    Checks if current user matches the user that made the booking,
    otherwise it redirects to the mybookings_page.
    """
    booking = get_object_or_404(Booking, pk=pk)
    booking.delete()
    messages.success(request, 'Booking has been deleted')
    return redirect('/mybooking/')


def booking_list_admin(request):
    """
    A view that provides the list of bookings 
    data that coresponds to authenticated user
    """
    
    data = Booking.objects.filter(created_by=request.user)

    return render(request, 'mybookings.html', {'data': data})
