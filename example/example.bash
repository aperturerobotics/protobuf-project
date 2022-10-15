#!/bin/bash
set -eo pipefail

echo "Compiling ts..."
../hack/bin/esbuild example.ts --bundle --platform=node --outfile=example.js

echo "Compiling go..."
go build -o example -v ./

echo "Starting server..."
./example &
PID=$!

function cleanup {
    kill -9 ${PID}
}
trap cleanup EXIT

sleep 1

pushd ../
echo "Starting client..."
node ./example/example.js
popd
