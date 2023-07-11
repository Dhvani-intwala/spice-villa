"""
Booking App - Forms
----------------
Forms for Booking App

"""

from django import forms
from datetime import date


class BookingFrom(forms.ModelForm):
    """
    Form for the Booking Model
    """
    date = forms.DateField(widget=forms.DateInput(attrs={
        'id': 'datePicker', 'class': 'form-control', 'type': 'date'}))
