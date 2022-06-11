# Sumdrill with Kubernetes

Simple web app (frontend + backend combo) deployed to GKE for absolutely no other reason than to get familiar with kubernetes.

### Development

```docker-compose up``` will bootstrap the development environment.

### Testing kubernetes locally

Run script ```deploy-local-kubernetes.sh```

### Creating cluster in GKE

Run script ```create-gke-cluster.sh``` to create cluster and ```deploy-gke-manifests.sh``` to deploy.

### CI/CD

Whenever there's a push to master branch images gets redeployed under the namespace ```master```

### To see it in action

Not deployed atm. GKE is really expensive!!

#### Notes

For github actions ```Kubernetes Engine Service Agent``` and ```Storage Admin``` are required for service account roles.

Shell into specific container 
```kubectl exec -it -n project test-deployment-7498dd976-g4d98 --container="test-boxi" -- /bin/bash```
With container not specified will exec into first container.

Busybox (you must deploy busybox first, duh): ```kubectl exec -it busybox1 -- wget -qO - http://frontend-service.project:3456```

Label nodes: ```kubectl label nodes k3d-k3s-default-agent-1 network=good```
Remove label: ```kubectl label nodes k3d-k3s-default-agent-1 network-```

In affinity/anti-affinity operators ```Exists``` or ```DoesNotExist``` checks if the key exists or not. Value should not be specified.

Get resource as yaml
```kubectl get deployment sumdrill-deployment -n project -o jsonpath='{.spec.template.spec.containers[*].name}```
Get resource the whole shebang as yaml (in nice format):
```kubectl get deployment sumdrill-deployment -n project -o=json```




