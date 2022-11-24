FROM node:10-alpine as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
ARG ENVIROMENT
RUN npm run build -- --output-path=./dist/out --configuration $ENVIROMENT --verbose

FROM nginx:1.15
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
