# Generated by Django 5.0.3 on 2024-03-28 14:20

import django.db.models.deletion
import djongo.models.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='HistoricalEcho',
            fields=[
                ('_id', djongo.models.fields.ObjectIdField(auto_created=True, primary_key=True, serialize=False)),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('cover', models.ImageField(upload_to='images/')),
            ],
        ),
        migrations.CreateModel(
            name='Contents',
            fields=[
                ('_id', djongo.models.fields.ObjectIdField(auto_created=True, primary_key=True, serialize=False)),
                ('label', models.CharField(max_length=255)),
                ('value', models.TextField()),
                ('historical_echo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blog.historicalecho')),
            ],
        ),
    ]
