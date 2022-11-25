FROM node:alpine

WORKDIR /user/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

EXPOSE 4200
CMD /usr/src/app/node_modules/.bin/ng serve
