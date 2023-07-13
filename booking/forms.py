"""
Booking App - Forms
----------------
Forms for Booking App

"""

from django import forms
from datetime import date


class BookingForm(forms.Form):
    """
    Form for the Booking Model
    """
    date = forms.DateField(widget=forms.DateInput(attrs={
        'id': 'datePicker', 'class': 'form-control', 'type': 'date'}),
        label='')
    start_time = forms.TimeField(widget=forms.TimeInput(attrs={
        'id': 'startTime', 'class': 'form-control', 'type': 'time',
        'step': '3600'}), label='')
    end_time = forms.TimeField(widget=forms.TimeInput(
        attrs={'id': 'endTime', 'class': 'form-control',
               'type': 'time', 'step': '3600'}), label='')
