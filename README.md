# Random dog app

Simple react app to show a random dog picture filtered by breed using [dog's API](https://dog.ceo/dog-api/)


# How to use it

Simply follow these steps:

1. clone project
2. run `npm install` inside the cloned folder
3. run `npm run start` 


# Tests

To run some tests simply enter `npm run test`


# Docker

To create a docker image of this web app run the following commands inside the project folder:

1. `docker build -t random-puppy-docker .`
2. `docker run -it --rm -p 5000:5000 --name react-demo random-puppy-docker`
3. visit [http://localhost:5000/](http://localhost:5000/)

### Note
In case you want it to run as daemon use flag `-d` in the run command.

`docker run -it --rm -d -p 5000:5000 --name react-demo random-puppy-docker`