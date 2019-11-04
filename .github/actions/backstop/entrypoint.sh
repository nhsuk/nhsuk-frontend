#!/bin/sh

# Exit if any subcommand fails
set -e 

setup="NODE_ENV=development npm install --no-package-lock &&"

echo "## Running Action"
args=$@
sh -c "$setup ((npm run start) & /usr/bin/docker run --rm -it --network='host' --mount type=bind,source='/github/workspace',target=/src backstopjs/backstopjs:latest test --config=./tests/backstop/backstop.js --moby)"