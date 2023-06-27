from __future__ import absolute_import, unicode_literals

from celery import Celery
import os

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')#projectname

app = Celery('backend')

app.config_from_object('django.conf:settings', namespace="CELERY")

app.autodiscover_tasks()

@app.task(bind=True, ignore_result=True)
def debug_task(self):
    print(f'request: {self.request!r}')


# TO RUN CELERY ENTER IN TERMINAL
# celery -A backend worker --loglevel=info --pool=solo