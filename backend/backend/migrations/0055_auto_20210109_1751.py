# Generated by Django 3.0.7 on 2021-01-09 17:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0054_auto_20210109_1749'),
    ]

    operations = [
        migrations.AlterField(
            model_name='video',
            name='backfire_risk',
            field=models.FloatField(default=0, help_text='Resilience to backfiring risks'),
        ),
        migrations.AlterField(
            model_name='video',
            name='diversity_inclusion',
            field=models.FloatField(default=0, help_text='Diversity and Inclusion'),
        ),
        migrations.AlterField(
            model_name='video',
            name='engaging',
            field=models.FloatField(default=0, help_text='Engaging'),
        ),
        migrations.AlterField(
            model_name='video',
            name='importance',
            field=models.FloatField(default=0, help_text='Importance'),
        ),
        migrations.AlterField(
            model_name='video',
            name='layman_friendly',
            field=models.FloatField(default=0, help_text='Layman-friendly'),
        ),
        migrations.AlterField(
            model_name='video',
            name='pedagogy',
            field=models.FloatField(default=0, help_text='Pedagogy'),
        ),
        migrations.AlterField(
            model_name='video',
            name='reliability',
            field=models.FloatField(default=0, help_text='Reliability'),
        ),
    ]
