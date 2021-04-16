from backend.api_v2.helpers import WithUpdatedDocstringsDecorator, WithPKOverflowProtection
from backend.models import EmailDomain
from django_filters import rest_framework as filters
from rest_framework import mixins
from rest_framework import serializers
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly


class EmailDomainSerializer(serializers.ModelSerializer):
    """E-mail domain"""

    class Meta:
        model = EmailDomain
        fields = ('domain', 'status')


class EmailDomainFilterV2(filters.FilterSet):
    """Filter comments."""

    class Meta:
        model = EmailDomain
        fields = ['status']


@WithUpdatedDocstringsDecorator
class EmailDomainViewSetV2(mixins.ListModelMixin,
                           mixins.RetrieveModelMixin,
                           WithPKOverflowProtection,
                           viewsets.GenericViewSet, ):
    """List of Email Domains"""

    filterset_class = EmailDomainFilterV2
    permission_classes = [IsAuthenticatedOrReadOnly]

    UPDATE_DOCSTRING = {'list': "List e-mail domains",
                        'retrieve': "Get e-mail domain"}

    KWARGS_DICT = {
        'retrieve': {
            'responses': {
                404: None, 200: EmailDomainSerializer}}, 'list': {
            'responses': {
                200: EmailDomainSerializer(
                    many=True), 400: None}}}

    queryset = EmailDomain.objects.all()
    serializer_class = EmailDomainSerializer
