FROM node:12.20.1

RUN mkdir -p /srv/app/tripify-server

RUN apt-get update && apt-get install -y apt-transport-https

WORKDIR /srv/app/tripify-server

COPY package.json /srv/app/tripify-server
COPY package-lock.json /srv/app/tripify-server

RUN npm install && npm cache clean --force
RUN apt-get install -y netcat

COPY . /srv/app/tripify-server

RUN chmod +x docker-entrypoint.sh
ENTRYPOINT ["./docker-entrypoint.sh"]

RUN npm run build

CMD ["npm", "start"]




