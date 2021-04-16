# Generated by Django 3.0.7 on 2020-12-12 18:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0039_auto_20201212_1831'),
    ]

    operations = [
        migrations.CreateModel(
            name='Degree',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('level', models.CharField(help_text='Degree level', max_length=100)),
                ('domain', models.CharField(help_text='Degree domain', max_length=100)),
                ('institution', models.CharField(help_text='Degree institution', max_length=100)),
            ],
            options={
                'ordering': ['level', 'domain', 'institution'],
            },
        ),
        migrations.AddField(
            model_name='userinformation',
            name='first_name',
            field=models.CharField(blank=True, help_text='First name', max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='userinformation',
            name='google_scholar',
            field=models.URLField(blank=True, help_text='Your Google Scholar URL', max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='userinformation',
            name='last_name',
            field=models.CharField(blank=True, help_text='Last name', max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='userinformation',
            name='linkedin',
            field=models.URLField(blank=True, help_text='Your LinkedIn URL', max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='userinformation',
            name='orcid',
            field=models.URLField(blank=True, help_text='Your ORCID', max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='userinformation',
            name='twitter',
            field=models.URLField(blank=True, help_text='Your Twitter handle', max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='userinformation',
            name='website',
            field=models.URLField(blank=True, help_text='Your website URL', max_length=500, null=True),
        ),
        migrations.AddField(
            model_name='userinformation',
            name='youtube',
            field=models.URLField(blank=True, help_text='Your Youtube channel URL', max_length=500, null=True),
        ),
        migrations.AlterField(
            model_name='userinformation',
            name='expertise_keywords',
            field=models.ManyToManyField(blank=True, help_text='Your expertise keywords.', related_name='expertise_keywords', to='backend.ExpertiseKeyword'),
        ),
        migrations.AddField(
            model_name='userinformation',
            name='degrees',
            field=models.ManyToManyField(blank=True, help_text='Your degrees.', related_name='degrees', to='backend.Degree'),
        ),
    ]
