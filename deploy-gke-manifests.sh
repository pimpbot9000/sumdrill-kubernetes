#!/bin/bash
kubectl apply -f manifests-gke/namespace.yaml
kubectl apply -f manifests-gke/configmap.yaml
kubectl apply -f manifests-gke/postgres/persistent-volume-claim.yaml
kubectl apply -f manifests-gke/postgres/postgres.yaml
kubectl apply -f manifests-gke/postgres/postgres-service.yaml
kubectl apply -f manifests-gke/deployment.yaml
kubectl apply -f manifests-gke/backend-service.yaml
kubectl apply -f manifests-gke/backend-service-internal.yaml
kubectl apply -f manifests-gke/frontend-service.yaml
kubectl apply -f manifests-gke/ingress2.yaml
#kubectl apply -f manifests-gke/delete-job.yaml