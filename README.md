# NodeJS REST API Server Setup Using Docker

This configuration builds a docker image to run a boilerplate and minimal NodeJS REST API Server. The API Server can be used for CRUD operations and is very easy to scaffold accordingly.

The setup is based on two containers:
1. **nodejs** (from the custom build), and 
2. **mongodb** (based on the official MongoDB Docker image). 

The containers are linked together through the Docker internal network. 

I am using Docker volumes so we can develop and see changes in the container in real time. This means that we do not need to rebuild the Docker container everytime the code is changed. Pretty cool, uhm?

## Building

    $ git clone https://github.com/jamesattard/nodeApi-docker
    $ cd nodeApi-docker/
    $ docker-compose build

## Run API Server

    $ docker-compose up

Point the browser or Postman to http://localhost:5000/api/users