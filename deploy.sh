#!/bin/bash

# When a command exits non zero we don't execute the other ones
set -e

# Create a new build of the image
docker build -f Dockerfile-production -t janhoogeveen/cleverfranke .

# Run all the tests
docker run janhoogeveen/cleverfranke npm run test

# Push image to the Docker Hub
docker push janhoogeveen/cleverfranke:latest
