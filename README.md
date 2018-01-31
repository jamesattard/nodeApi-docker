# NodeJS REST API Server Setup Using Docker

This configuration builds a docker image to run a boilerplate and minimal NodeJS REST API Server. The API Server can be used for CRUD operations and is very easy to scaffold accordingly.

The setup is based on two containers: one for NodeJS (which we will build) and the other for MongoDB (based on the official MongoDB Docker image). They are connected together by Docker internal network. 

Docker volumes allows us to develop and see changes in the container in real time. This means that we do not need to rebuild the Docker container. Pretty cool, uhm?

## Configuration

Configuration is pretty straightforward - just refer to the Docker files (dev.Dockerfile and docker-compose.yml).

To build the setup:

    $ docker-compose build

## Run API Server

    $ docker-compose up

Point the browser or Postman to http://localhost:5000/api/users