# Nodejs API

 > This is a [Nodejs](https://nodejs.org/en/) project bootstrapped with [Create Node Basic](https://github.com/mugarate12/basic-node-ts-config) to create a basic structure and configuration of [Nodejs](https://nodejs.org/en) API with [Express](https://expressjs.com) and [Typescript](https://www.typescriptlang.org)

## Summary

- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Basic Scripts](#basic-scripts)
- [Docker Scripts](#docker-scripts)
- [Folder Structure](#folder-structure)
- [Docker](#docker)

## Getting Started

### Prerequisites

- [Nodejs](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm)
- [Redis](https://redis.io/)
- [Docker](https://www.docker.com/get-started) (Optional)

## Configuration

### Environment variables

Set the environment variables in the `.env` file like the `.env.example` file.

-  `PORT`: Port where the server will be listening.
-  `NODE_ENV`: Set type of environment to run the server mode (development, production, test).
-  `REDIS_URL`: URI of the Redis server. By default is `redis://localhost:6379`.

## Basic scripts

- Your package.json have initial commands to build, run, test and create server to development

build your project:
```shell
npm run build
```

build your project and immediately run your app builded:
```shell
npm start
```

run project in production mode with pm2:
```shell
npm run start:pm2
```

run project in development build:
```shell
npm run dev
```

run all of tests in project:
```shell
npm run test
```
> Test your application run correctlly to send HTTP GET to localhost:8000

## Docker scripts

run your project in docker to production (docker-compose -f ./docker-compose.yml up):
```shell
npm run docker:prod
```

run your project in docker to development (docker-compose -f ./docker-compose.dev.yml up):
```shell
npm run docker:dev
```

run your project in docker to test (docker-compose -f ./docker-compose.test.yml up):
```shell
npm run docker:test
```

run your project in docker to production (docker-compose -f ./docker-compose.yml up --build):
```shell
npm run docker:prod:build
```

run your project in docker to development (docker-compose -f ./docker-compose.dev.yml up --build):
```shell
npm run docker:dev:build
```

run your project in docker to test (docker-compose -f ./docker-compose.test.yml up --build):
```shell
npm run docker:test:build
```

## Folder Structure

Your project get this structure
```
project
│   .env.example
│   .gitignore
│   .dockerignore
│   CHANGELOG.md
│   README.md
│   docker-compose.yml
│   docker-compose.test.yml
│   docker-compose.dev.yml
│   Dockerfile
│   Dockerfile.dev
│   Dockerfile.test
│   babel.config.js
│   package-lock.json
│   package.json
│   tsconfig.json
│   tsconfig.spec.json
│   pm2.json
│   __tests__
│   └───unit
|   │   |  example.test.ts
|   │   |  redis.test.ts
│   └───integration
|   │   |  example.test.ts
│   nginx
|   │   default.conf
|   │   Dockerfile
│   docs
|   │   docs.yaml
└───src
|   |   app.ts
|   |   server.ts
│   └───config
│   |   │   redisClient.ts
│   |   │   index.ts
│   └───controllers
│   |   │   ExampleController.ts
│   |   │   index.ts
│   └───services
│   |   │   Example.services.ts
│   |   │   index.ts
│   └───routes
│   |   │   example.routes.ts
│   |   │   index.ts
|   └───utils
│       │   createToken.ts
│       │   handleError.ts
│       │   index.ts
```

## Docker

### Build

```shell
docker build -t <your username>/node-web-app .
```

### Run

```shell
docker run -p 8000:8000 -d <your username>/node-web-app
```

### Docker Compose

```shell

docker-compose up --build

```