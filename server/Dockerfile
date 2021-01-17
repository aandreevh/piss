FROM node:12.20.1

RUN apt-get update && apt-get install -y apt-transport-https
RUN apt-get install -y netcat

WORKDIR /server

CMD chmod +x docker-entrypoint.sh;./docker-entrypoint.sh;npm run build;npm run db:up; npm start



