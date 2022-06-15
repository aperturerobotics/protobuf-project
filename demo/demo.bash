#!/bin/bash
set -eo pipefail

echo "Compiling ts..."
../node_modules/.bin/esbuild demo.ts --bundle --platform=node --outfile=demo.js

echo "Compiling go..."
go build -o demo -v ./

echo "Starting server..."
./demo &
PID=$!

function cleanup {
    kill -9 ${PID}
}
trap cleanup EXIT

sleep 1

pushd ../
echo "Starting client..."
node ./demo/demo.js
popd
