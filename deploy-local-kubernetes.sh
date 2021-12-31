#!/bin/bash
k3d cluster create --port '80:80@loadbalancer' --agents 1
#k3d cluster create --agents 1
kubectl apply -f manifests-local/namespace.yaml
kubectl apply -f manifests-local/configmap.yaml
kubectl apply -f manifests-local/postgres.yaml
kubectl apply -f manifests-local/deployment.yaml
kubectl apply -f manifests-local/backend-service.yaml
kubectl apply -f manifests-local/backend-service-internal.yaml
kubectl apply -f manifests-local/frontend-service.yaml
kubectl apply -f manifests-local/ingress.yaml
kubectl apply -f manifests-local/delete-job.yaml