"""
Booking App - Views
----------------
Views for Booking App

"""
from django.shortcuts import render
from django.http import HttpResponse
from .models import Menu
from .models import Category


# from .models import Booking
# from .models import Table
# def store_data():
#     starter = Category.objects.create(name='starter')
#     data1 = Menu(name='Hara bhara kabab',
#                  description='Veg kabab made with potatoes green peas spinach',
#                  price='5.99',
#                  category=starter,
#                  menu_img_path='/ workspaces/spice-villa/static/images/menu/Hare-Bhara-kabab-Fried.jpg')
#     data1.save()

#     data2 = Menu(
#         name='Panner Tikka',
#         description='Paneer cubes marinated in spicy yogurt mix, and grilled to perfection',
#         price='10.99', category=starter,
#         menu_img_path='/workspaces/spice-villa/static/images/menu/Starters.jpg')
#     data2.save()

#     data3 = Menu(name='Chilli chesse nacho',
#                  description='cheese, ground meat, black beans, corn',
#                  price='7.99', category=starter,
#                  menu_img_path='/workspaces/spice-villa/static/images/menu/chili-cheese-nacho.jpg')
#     data3.save()


def home(request):
    """The view for the start page. Renders the index.html
    page which also extends the base.html
    """
    # store_data()
    instances = Menu.objects.all()
    return render(request, 'index.html', {'menu_data': instances})
