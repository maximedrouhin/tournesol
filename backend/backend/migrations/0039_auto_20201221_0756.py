# Generated by Django 3.0.7 on 2020-12-21 07:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backend', '0038_videocomment_anonymous'),
    ]

    operations = [
        migrations.CreateModel(
            name='EmailDomain',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('domain', models.CharField(help_text='E-mail domain', max_length=100, unique=True)),
                ('status', models.CharField(choices=[('RJ', 'Rejected'), ('ACK', 'Accepted'), ('PD', 'Pending')], default='PD', help_text='Status of the domain.', max_length=10)),
            ],
        ),
        migrations.AddConstraint(
            model_name='emaildomain',
            constraint=models.CheckConstraint(check=models.Q(status__istartswith='@'), name='domain_starts_with_at'),
        ),
    ]
