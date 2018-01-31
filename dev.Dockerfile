FROM node:latest

RUN mkdir -p /usr/src/app  
WORKDIR /usr/src/app  
COPY . /usr/src/app

EXPOSE 5000  
RUN npm install  
CMD ["npm", "run", "server"] 