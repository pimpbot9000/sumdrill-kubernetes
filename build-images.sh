#!/bin/bash
docker build -t pimpbot9000/sumdrill-backend:latest -f backend/Dockerfile backend
docker push pimpbot9000/sumdrill-backend:latest

docker build -t pimpbot9000/sumdrill-frontend:latest -f frontend/Dockerfile.production frontend
docker push pimpbot9000/sumdrill-frontend:latest

docker build -t pimpbot9000/delete-job:latest -f delete-job/Dockerfile delete-job
docker push pimpbot9000/delete-job:latest
