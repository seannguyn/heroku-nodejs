FROM node:11.3

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install 

EXPOSE 3000

CMD ['npm','start']