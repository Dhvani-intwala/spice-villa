"""
Booking App - models
Models for Booking App

"""
from django.db import models
from cloudinary.models import CloudinaryField


# Create your models here.

class Table(models.Model):
    """
    Model for teble object
    """
    code = models.CharField(max_length=10, unique=True)
    table_free_img = CloudinaryField('free_image')
    table_occupied_img = CloudinaryField('occupied_image')
    no_of_persons = models.IntegerField(default=1)

    def __str__(self):
        return self.code
