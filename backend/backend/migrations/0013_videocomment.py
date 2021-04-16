# Generated by Django 3.0.7 on 2020-06-26 23:48

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0012_auto_20200618_2127'),
    ]

    operations = [
        migrations.CreateModel(
            name='VideoComment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField(null=True)),
                ('comment', models.TextField()),
                ('datetime_lastedit', models.DateTimeField(auto_now=True)),
                ('datetime_add', models.DateTimeField(auto_now_add=True)),
                ('votes_plus', models.IntegerField(default=0)),
                ('votes_minus', models.IntegerField(default=0)),
                ('red_flags', models.IntegerField(default=0)),
                ('parent_comment', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='videocomment_parent_comment', to='backend.VideoComment')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='videocomment_user', to='backend.UserPreferences')),
                ('video', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='videocomment_video', to='backend.UserPreferences')),
            ],
        ),
    ]
