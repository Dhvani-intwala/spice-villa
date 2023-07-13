"""
Booking App - Forms
----------------
Forms for Booking App

"""

from django import forms
from datetime import date
from bootstrap_datepicker_plus import DatePickerInput


class BookingFrom(forms.ModelForm):
    """
    Form for the Booking Model
    """
    # date = forms.DateField(widget=forms.DateInput(attrs={
    #     'id': 'datePicker', 'class': 'form-control', 'type': 'date'}))
    date = forms.DateField(widget=DatePickerInput(format=r'%Y-%m-%d'))
