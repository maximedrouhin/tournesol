# Generated by Django 3.0.7 on 2021-02-12 18:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0077_auto_20210212_1807'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='duration',
            field=models.DurationField(blank=True, help_text='Video duration', null=True),
        ),
    ]
