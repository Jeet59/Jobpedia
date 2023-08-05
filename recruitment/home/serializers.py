from rest_framework_mongoengine import serializers
from .models import JobList, Candidates


class JobListSerializer(serializers.DocumentSerializer):
    class Meta:
        model = JobList
        fields = "__all__"


class CandidatesSerializer(serializers.DocumentSerializer):
    class Meta:
        model = Candidates
        fields = "__all__"
