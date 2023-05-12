FROM node:latest as build
WORKDIR /app

RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install
COPY . .
RUN ng build

WORKDIR /app/dist/elsprage-app

RUN npm i -g http-server

ENTRYPOINT ["http-server","-p","8080"]