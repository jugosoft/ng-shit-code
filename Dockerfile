FROM node:alpine

WORKDIR /user/src/app

COPY package.json /user/src/app
COPY package-lock.json /user/src/app

RUN npm install

COPY . /user/src/app

EXPOSE 4200
CMD /usr/src/app/node_modules/.bin/ng serve
