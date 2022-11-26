# stage build
FROM node:14.15.0-alpine as build
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build 

# stage hosting app
FROM nginx:1.23-alpine
COPY --from=build /usr/src/app/dist/ng-shit-code /usr/share/nginx/html
