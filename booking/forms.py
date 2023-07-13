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
        label='', error_messages={
        'required': "Please Enter your Name"
    })
    start_time = forms.TimeField(widget=forms.TimeInput(attrs={
        'id': 'startTime', 'class': 'form-control', 'type': 'time',
        'step': '3600'}), label='')
    end_time = forms.TimeField(widget=forms.TimeInput(
        attrs={'id': 'endTime', 'class': 'form-control',
               'type': 'time', 'step': '3600'}), label='')
    table_code = forms.ChoiceField(widget=forms.Select(
        attrs={'id': 'tableCode', 'class': 'form-select',
               'onChange': 'setPerson();'}),
        choices=(
        ("A1", "A1"), ("A2", "A2"), ("A3", "A3"), ("B1", "B1"),
        ("B2", "B2"), ("B3", "B3"), ("C1", "C1"), ("C2", "C2"),
        ("C3", "C3")))
    customer_full_name = forms.CharField(widget=forms.TextInput(
        attrs={'id': 'fullName', 'class': 'form-control',
               'type': 'text', }))
    customer_email = forms.EmailField(widget=forms.EmailInput(
        attrs={'id': 'email', 'class': 'form-control',
               'type': 'email'}))
