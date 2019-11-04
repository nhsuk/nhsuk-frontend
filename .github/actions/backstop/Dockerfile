FROM node:lts-alpine

LABEL "com.github.actions.name"="Run Backstop"
LABEL "com.github.actions.description"="Runs Backstop tests in a Docker container"

COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]