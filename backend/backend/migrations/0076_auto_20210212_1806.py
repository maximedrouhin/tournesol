# Generated by Django 3.0.7 on 2021-02-12 18:06

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0075_auto_20210212_1750'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='description',
            field=models.TextField(blank=True, help_text='Video Description from the web page', null=True),
        ),
        migrations.AlterField(
            model_name='video',
            name='name',
            field=models.CharField(blank=True, help_text='Video Title', max_length=1000),
        ),
        migrations.AlterField(
            model_name='video',
            name='video_id',
            field=models.CharField(help_text='Video ID from YouTube URL, matches ^[A-Za-z0-9-_]+$', max_length=20, unique=True, validators=[django.core.validators.RegexValidator('^[A-Za-z0-9-_]+$', 'Video ID must match ^[A-Za-z0-9-_]+$')]),
        ),
    ]
