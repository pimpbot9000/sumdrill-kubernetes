#!/bin/bash
#k3d cluster create --port '8081:80@loadbalancer' --port "8082:30080@agent:0" --agents 2
k3d cluster create --port '8081:80@loadbalancer' --agents 2