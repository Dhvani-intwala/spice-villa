"""
booking App - Tests
----------------
Unit Tests for Booking.
"""

import datetime
import unittest
from datetime import datetime, date
from django.test import TestCase
# from users.models import User
# from settings.AUTH_USER_MODEL import user
from django.contrib.auth.models import User
from django.conf import settings
from .models import Table,Booking

class TestViews(TestCase):
    """
    Unit Tests for Booking App Views
    """

    def setUp(self):
        """
        Create test login user and test table object
        """

        # creates test user
        email = "testuser@gmail.com"
        first = "test"
        last = "user"
        pswd = "T12345678."
        self.user = User.objects.create_user(
            email=email, first_name=first, last_name=last, password=pswd)
        logged_in = self.client.login(email=email, password=pswd)

    def test_booking_page_redirects(self):
        """ Test if booking page redirects in case user is not logged in"""
        self.user.logout()
        response = self.user.get('/mybooking/')
        self.assertEqual(response.status_code, 302)


    def test_booking_page(self):
        """ Test if booking page renders correct page """
        response = self.user.get('/mybooking/')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'booking.html')


    def test_mybookings_page_redirects(self):
        """ Test if mybookings page redirects in case user is not logged in"""
        self.user.logout()
        response = self.user.get('/booking/mybookings/')
        self.assertEqual(response.status_code, 302)

    
    def test_mybookings_page(self):
        """ Test if mybookings page renders correct page """
        response = self.user.get('/booking/mybookings/')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'mybookings.html')

    
    def test_mybookings_context(self):
        """ Test if Booking List rendered to Create 
            mybookings page
        """
        response = self.user.get('/bookings/mybookings/')
        self.assertEqual(response.status_code, 200)
        self.assertTrue('booking_list' in response.context)


    def test_created_booking_is_rendered_in_mybookings(self):
        """ Test if the mybookings page renders only the bookings
        made by the logged in user """

        # creates a booking post for testuser@yahoo.com
        new_booking = {
            "date": "2022-08-25",
            "start_time": "16:00:00",
            "end_time": "19:00:00",
            "table_code": "A2",
            "book_on_user": "on",
        }

        self.client.get('/booking/')
        self.client.post('/booking/', new_booking)

        self.client.logout()

    