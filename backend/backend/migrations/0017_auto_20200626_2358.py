# Generated by Django 3.0.7 on 2020-06-26 23:58

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0016_auto_20200626_2353'),
    ]

    operations = [
        migrations.AlterField(
            model_name='videocomment',
            name='video',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='videocomment_video', to='backend.Video'),
        ),
    ]
