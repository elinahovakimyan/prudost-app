# Generated by Django 3.0.2 on 2020-02-11 07:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0018_auto_20200211_0613'),
    ]

    operations = [
        migrations.AlterField(
            model_name='goal',
            name='description',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
    ]