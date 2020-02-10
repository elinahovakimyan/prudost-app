from django.contrib import admin
from .models import Goal, Task, Category

# Register your models here.

class TaskInline(admin.TabularInline):
    model = Task


class GoalAdmin(admin.ModelAdmin):
    '''
        Admin View for
    '''
    inlines = [
        TaskInline,
    ]

admin.site.register(Goal, GoalAdmin)
admin.site.register(Category)
