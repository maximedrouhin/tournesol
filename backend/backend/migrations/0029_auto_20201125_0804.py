# Generated by Django 3.0.7 on 2020-11-25 08:04

import computed_property.fields
from django.db import migrations
import uuid
from backend.models import ExpertRating

def recompute_property(*args, **kwargs):
    """Open all objects and save them to recompute the property."""
    pass

class Migration(migrations.Migration):
    dependencies = [
        ('backend', '0028_expertrating_datetime_lastedit'),
    ]

    operations = [
        migrations.AddField(
            model_name='expertrating',
            name='video_1_2_ids_sorted',
            field=computed_property.fields.ComputedCharField(compute_from='video_first_second', default=uuid.uuid1, editable=False, max_length=50),
        ),
        migrations.AlterUniqueTogether(
            name='expertrating',
            unique_together=set(),
        ),
        migrations.RunPython(recompute_property)
    ]
