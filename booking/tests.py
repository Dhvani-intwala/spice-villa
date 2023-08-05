"""
Menu App - Tests
----------------
Unit Tests for Menu App.
"""

from django.test import TestCase
from .models import Booking,Table
from django.contrib.auth import get_user_model


# Create your tests here.

class TestViews(TestCase):
    """
    Unit Tests for Menu App Views
    """
    def setUp(self):
        """ Create test login user and test table object"""

        # creates test user
        email = "testuser@gmail.com"
        first = "test"
        last = "user"
        pswd = "T12345678"
        user_model = get_user_model()
        self.user = user_model.objects.create_user(
            email=email, first_name=first, last_name=last, password=pswd)
        logged_in = self.user.login(email=email, password=pswd)
        self.assertTrue(logged_in)
    
    def test_login_page_redirects(self):
        """
        Test if login page redirects in case user is home page
        """



    def test_booking_page_redirects(self):
        """
        Test if booking page redirects in case user is not logged in
        """
        self.user.logout()
        response = self.user.get('/booking')
        self.assertTemplateUsed(response, 'booking.html')

    def test_profile_page(self):
        """ Test if profile page renders correct page """
        response = self.user.get('/bookings/mybooking/')
        self.assertEqual(response )
        self.assertTemplateUsed(response, 'mybooking.html')

     def test_created_booking_is_rendered_in_mybooking(self):
        """ Test if the mybooking page renders only the bookings
        made by the logged in user 
        """

        # creates a booking post for testuser@yahoo.com
        new_booking = {
            "date": "2022-08-25",
            "start_time": "16:00:00",
            "end_time": "19:00:00",
            "table_code": "A2",
            "book_on_user": "on",
        }
         self.user.get('/booking/mybookings/')
        self.user.post('/booking/mybookings/', new_booking)
        self.user.logout()


    
