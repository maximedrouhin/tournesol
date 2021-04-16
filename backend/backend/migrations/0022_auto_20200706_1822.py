# Generated by Django 3.0.7 on 2020-07-06 18:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0021_auto_20200706_2237'),
    ]

    operations = [
        migrations.AddField(
            model_name='video',
            name='backfire_risk',
            field=models.FloatField(default=0, help_text='Resilience to backfiring risks'),
        ),
        migrations.AddField(
            model_name='video',
            name='engaging',
            field=models.FloatField(default=0, help_text='Engaging'),
        ),
        migrations.AddField(
            model_name='video',
            name='importance',
            field=models.FloatField(default=0, help_text='Importance'),
        ),
        migrations.AddField(
            model_name='video',
            name='pedagogy',
            field=models.FloatField(default=0, help_text='Pedagogy'),
        ),
        migrations.AddField(
            model_name='video',
            name='reliability',
            field=models.FloatField(default=0, help_text='Reliability'),
        ),
    ]
