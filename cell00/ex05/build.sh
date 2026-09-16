#!/bin/bash

if [ "$#" -eq 0 ]; then
    echo "No arguments supplied"
    exit 1
fi

for argument in "$@"
do
    mkdir -p "ex$argument"
done
