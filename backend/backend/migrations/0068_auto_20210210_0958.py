# Generated by Django 3.0.7 on 2021-02-10 09:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0067_videoratingprivacy'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinformation',
            name='allow_use_in_scores',
            field=models.BooleanField(default=False, help_text='Allow my algorithmic representative to be publicly used for search [default value, privacy is set per-video]'),
        ),
    ]
