#!/bin/bash

# When a command exits non zero we don't execute the other ones
# Just like a little mini CI setup
set -e

# Create a new build of the image
docker build -f Dockerfile-production -t cleverfranke/starter-kyt .

# Run all the tests
docker run cleverfranke/starter-kyt npm run test

# Push image to the Docker Hub
docker push cleverfranke/starter-kyt:latest
