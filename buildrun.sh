#!/bin/bash

npm run export

docker container stop einaudi-quiz && docker container rm einaudi-quiz
docker image rm einaudi-quiz

docker image build -t einaudi-quiz . && docker-compose up -d