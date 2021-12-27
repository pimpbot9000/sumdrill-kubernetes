FROM node:latest

WORKDIR /usr/src/app
COPY index.js index.js
COPY package.json package.json
COPY src src
COPY package-lock.json package-lock.json
RUN npm i
CMD ["node", "index.js"]