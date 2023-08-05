from django.urls import path
from .views import job_list, candidates_list, add_job, add_candidate, home

urlpatterns = [
    path("home/jobs", job_list, name="job-list"),
    path("home/candidates", candidates_list, name="candidate-list"),
    path("home/add_job", add_job, name="add-job"),
    path("home/add_candidate", add_candidate, name="add-candidate"),
    path("", home, name="home"),
]
