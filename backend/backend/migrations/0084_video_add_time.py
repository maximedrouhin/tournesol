# Generated by Django 3.0.7 on 2021-03-08 18:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0083_auto_20210308_1603'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='add_time',
            field=models.DateTimeField(help_text='Time the video was added to Tournesol', null=True),
        ),
    ]
