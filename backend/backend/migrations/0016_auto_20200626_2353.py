# Generated by Django 3.0.7 on 2020-06-26 23:53

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0015_auto_20200626_2351'),
    ]

    operations = [
        migrations.AlterField(
            model_name='videocomment',
            name='parent_comment',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='videocomment_parent_comment', to='backend.VideoComment'),
        ),
    ]
