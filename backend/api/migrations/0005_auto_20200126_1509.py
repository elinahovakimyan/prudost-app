# Generated by Django 3.0.2 on 2020-01-26 15:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_goal_completed'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='goal',
            options={'verbose_name_plural': 'Goals'},
        ),
        migrations.RenameField(
            model_name='task',
            old_name='text',
            new_name='title',
        ),
        migrations.AlterField(
            model_name='goal',
            name='title',
            field=models.CharField(max_length=150),
        ),
    ]
