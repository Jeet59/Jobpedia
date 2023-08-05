from django.shortcuts import render
from django.views.decorators.cache import never_cache
from django.http import HttpResponse
from .models import JobList, Candidates
from .serializers import JobListSerializer, CandidatesSerializer
from rest_framework import generics, status
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(["GET"])
@never_cache
def job_list(request):
    jobs = JobList.objects.all()
    serializer = JobListSerializer(jobs, many=True)
    return Response(serializer.data)


@api_view(["GET"])
@never_cache
def candidates_list(request):
    candidates = Candidates.objects.all()
    serializer = CandidatesSerializer(candidates, many=True)
    return Response(serializer.data)


@api_view(["POST"])
@never_cache
def add_job(request):
    if request.method == "POST":
        serializer = JobListSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
@never_cache
def add_candidate(request):
    if request.method == "POST":
        serializer = CandidatesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


def home(request):
    textcontext = "Server is up Django Bitch!!"
    return HttpResponse(textcontext, content_type="text/plain")
