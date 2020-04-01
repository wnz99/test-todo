![Node.js CI](https://github.com/wnz99/test-todo/workflows/Node.js%20CI/badge.svg)

# To-Do App

## Node version

Please use node version v12.13.1.

Install nvm:

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash

Install and use node version 10.14.1:

    nvm install 12.13.1 && nvm use 12.13.1

## Instructions

Setup:

    npm install

To run locally:

    npm run start

To build production bundle (no source maps and optimized for size):

    npm run build:prod

To development production bundle (no source maps and optimized for size):

    npm run build:dev

## Testing

To run tests:

    npm run test
    npm run test:watch
    npm run test:coverage
    npm run test:cypress

