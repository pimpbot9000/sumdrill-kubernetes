gcloud container clusters create "sumdrill-cluster" \
  --zone "europe-north1-b" \
  --machine-type "e2-standard-2" --disk-type "pd-standard" --disk-size "100" \
  --num-nodes "1" --node-locations "europe-north1-a","europe-north1-b" \
  --release-channel=rapid