#!/bin/sh

# Exit if any subcommand fails
set -e 

setup="NODE_ENV=development npm install &&"

echo "## Running Action"
args=$@
sh -c "$setup ((npm run start) & npm run backstop:test)"