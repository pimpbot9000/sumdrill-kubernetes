# Sumdrill with Kubernetes

Simple web app (frontend + backend combo) deployed to kubernetes for absolutely no other reason than to get familiar with kubernetes.

### Development

```docker-compose up``` will bootstrap the development environment.

### Testing kubernetes locally

Run script ```deploy-local-kubernetes.sh```

### Creating cluster in GKE

Run script ```create-gke-cluster.sh``` to create cluster and ```deploy-gke-manifests.sh``` to deploy.

### CI/CD

Whenever there's a push to master branch images gets redeployend among with manifests under the namespace ```master```

#### Notes

Fro github actions ```Kubernetes Engine Service Agent``` and ```Storage Admin``` are required for service account roles.

