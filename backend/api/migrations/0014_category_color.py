# Generated by Django 3.0.2 on 2020-02-10 05:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_auto_20200210_0511'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='color',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
    ]