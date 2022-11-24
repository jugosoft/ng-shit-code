FROM node:10-alpine as build-stage

ARG ENVIROMENT

WORKDIR /app
COPY ./package.json /app/
COPY ./ /app/

CMD [ "npm", "install" ]

RUN npm run build -- --output-path=./dist/out --configuration $ENVIROMENT --verbose

FROM nginx:1.15
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
