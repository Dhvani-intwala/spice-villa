"""
Menu App - Tests
----------------
Unit Tests for Menu App.
"""

from django.test import TestCase
from .models import Booking
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
        logged_in = self.client.login(email=email, password=pswd)
        self.assertTrue(logged_in)

        


