#!/bin/bash

command="curl --request POST --header 'Content-Type: application/json' --data '{ \"username\": \"$1\", \"password\": \"$2\" }' http://localhost:5000/api/user/login"

token=$(eval $command)

auth="Authorization=Bearer ${token}"

echo $auth

get-graphql-schema --header "${auth}" http://localhost:5000/graphql > schema.graphql

echo "got schema"