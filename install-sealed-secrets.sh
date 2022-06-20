helm repo add sealed-secrets https://bitnami-labs.github.io/sealed-secrets
helm repo update
# install the latest secrets-controller
helm install sealed-secrets-controller -n kube-system sealed-secrets/sealed-secrets

wget https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.18.0/kubeseal-0.18.0-linux-amd64.tar.gz
tar -xf kubeseal-0.18.0-linux-amd64.tar.gz
sudo install -m 755 kubeseal /usr/local/bin/kubeseal

kubeseal < apikey-secret.yaml > apikey-sealedsecret.yaml -o yaml