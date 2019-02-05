FROM node:10.15.0-alpine
WORKDIR /code

COPY package.json package-lock.json /code/
RUN npm ci

COPY . /code/
EXPOSE 3000

CMD [ "npm", "start" ]
