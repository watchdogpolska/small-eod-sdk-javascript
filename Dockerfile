FROM node:latest
WORKDIR /src
ADD . .
RUN npm install
RUN npm test
