#!/bin/bash
k3d cluster create --port '80:80@loadbalancer' --agents 1
#k3d cluster create --agents 1
kubectl apply -f manifests/namespace.yaml
kubectl apply -f manifests/configmap.yaml
kubectl apply -f manifests/postgres.yaml
kubectl apply -f manifests/deployment.yaml
kubectl apply -f manifests/backend-service.yaml
kubectl apply -f manifests/frontend-service.yaml
kubectl apply -f manifests/ingress.yaml
kubectl apply -f manifests/delete-job.yaml