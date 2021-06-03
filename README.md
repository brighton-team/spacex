# Spacex
#### *Wild galaxy wants to attack u! Keep calm &amp; win!*

Web app game project built with React and Express and running in Docker.

The stack uses React, Redux, NodeJS, Express, PostrgeSQL and Docker.

Cypress is used for integration testing. Eslint is configured.

Project is hosted [here](https://brighton-space-04.ya-praktikum.tech/).

### Getting started

You need Docker installed in order to run the project.

Firstly install required packages. Run in root directory:
```
npm install
```
Then
```
docker-compose up --build
```
The app will be running at [http://localhost:4444](http://localhost:4444).

### Testing

In order to launch all tests:
```
npm run test
```
Or
```
npm run test:open
```
to see GUI.

Note: the app must be launched prior to running tests.
