# Generated by Django 3.0.7 on 2020-12-12 21:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0043_auto_20201212_2057'),
    ]

    operations = [
        migrations.AddField(
            model_name='verifiedemail',
            name='user',
            field=models.ForeignKey(help_text='User that this e-mail belongs to', null=True, on_delete=django.db.models.deletion.CASCADE, to='backend.UserInformation'),
        ),
    ]
