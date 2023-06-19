# Generated by Django 3.2.19 on 2023-06-19 19:01

import cloudinary.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='BookingQuery',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
            ],
        ),
        migrations.CreateModel(
            name='Table',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('code', models.CharField(max_length=10, unique=True)),
                ('table_free_img', cloudinary.models.CloudinaryField(max_length=255, verbose_name='free_image')),
                ('table_occupied_img', cloudinary.models.CloudinaryField(max_length=255, verbose_name='occupied_image')),
                ('no_of_persons', models.IntegerField(default=1)),
            ],
        ),
        migrations.CreateModel(
            name='Booking',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('start_time', models.TimeField()),
                ('end_time', models.TimeField()),
                ('customer_full_name', models.CharField(blank=True, max_length=200)),
                ('customer_email', models.EmailField(blank=True, max_length=200)),
                ('created_on', models.DateTimeField(blank=True)),
                ('created_by', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('table', models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, to='booking.table', to_field='code')),
            ],
            options={
                'ordering': ['date', 'start_time'],
            },
        ),
        migrations.AddConstraint(
            model_name='booking',
            constraint=models.UniqueConstraint(fields=('created_by',), name='unique_booking_created_by'),
        ),
    ]
