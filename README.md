# NodeJS REST API Server Setup Using Docker

This configuration builds a docker container to run a boilerplate and minimal NodeJS REST API Server. The API Server can be used for CRUD operations and is very easy to scaffold accordingly.

The setup is based on two containers: one for NodeJS and the other for MongoDB. They are connected by Docker internal network. 

## Configuration

Configuration is pretty straightforward - just refer to the Docker files (dev.Dockerfile and docker-compose.yml).

To build the setup:

    $ docker-compose build

## Run API Server

    $ docker-compose up

Point the browser or Postman to http://localhost:5000/api/users