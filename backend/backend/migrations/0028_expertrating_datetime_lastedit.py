# Generated by Django 3.0.7 on 2020-08-12 15:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0027_auto_20200812_1429'),
    ]

    operations = [
        migrations.AddField(
            model_name='expertrating',
            name='datetime_lastedit',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
