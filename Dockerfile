FROM node:10.15.0-alpine

RUN apk add --no-cache python=2.7.15-r1 git-perl bash make gcc g++
RUN rm /bin/sh && ln -s /bin/bash /bin/sh
ENV USERNAME nodeuser

RUN adduser -D $USERNAME && \
    mkdir /code && \
    chown $USERNAME:$USERNAME /code

USER $USERNAME
WORKDIR /code

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
COPY package.json gulpfile.js docs.js/

RUN if [ "$NODE_ENV" == "production" ]; then npm install --production --pure-lockfile; else npm install --pure-lockfile; fi

EXPOSE 3000

COPY . /code

USER root
RUN find /code -user 0 -print0 | xargs -0 chown $USERNAME:$USERNAME
USER $USERNAME
RUN npm i gulp
RUN [ "npm", "run", "build" ]

# RUN APP DIRECTLY TO AVOID SPAWNING SUBPROCESSES IN DOCKER
CMD [ "node", "app.js" ]
