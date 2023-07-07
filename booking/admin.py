from django.contrib import admin
from .models import Booking, Table
from .models import Menu, Category


admin.site.register(Booking)
admin.site.register(Table)
admin.site.register(Menu)
admin.site.register(Category)
