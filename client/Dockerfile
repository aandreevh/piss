FROM node:12.20.1

RUN mkdir -p /srv/app/tripify-client
WORKDIR /srv/app/tripify-client

COPY package.json /srv/app/tripify-client
COPY package-lock.json /srv/app/tripify-client

RUN npm install

COPY . /srv/app/tripify-client

CMD ["npm", "start"]



