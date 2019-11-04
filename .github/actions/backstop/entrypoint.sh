#!/bin/sh

# Exit if any subcommand fails
set -e 

setup="NODE_ENV=development npm install --no-package-lock &&"

echo "## Running Action"
args=$@
sh -c "$setup ((npm run start) & docker run --rm -it --network='host' --mount type=bind,source='/home/travis/build/nhsuk/nhsuk-frontend',target=/src backstopjs/backstopjs:latest test --config=./tests/backstop/backstop.js --moby --testhost=http://127.0.0.1:3000)"
