# Generated by Django 3.0.7 on 2020-12-21 13:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0050_auto_20201221_0900'),
    ]

    operations = [
        migrations.AddField(
            model_name='userinformation',
            name='allow_use_in_scores',
            field=models.BooleanField(default=False, help_text='Allow using my algorithmic representative to be publicly used for search'),
        ),
    ]
