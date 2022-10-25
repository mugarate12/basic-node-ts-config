# Basic Configuration to Nodejs With Express and Typescript

> this module serving a basic structure and configuration of nodejs API with express and typescript  

## Summary

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Basic Scripts In Project](#basic-scripts-in-project)
- [Docker Scripts In Project](#docker-scripts-in-project)
- [Future Features](#future-features)

## Getting Started

### Prerequisites

- [Nodejs](https://nodejs.org/en/)
- [NPM](https://www.npmjs.com/get-npm)
- [Redis](https://redis.io/)
- [Docker](https://www.docker.com/get-started) (Optional)

## Usage

- Use this command in terminal and get initial structure, modules and development ambient to start your nodejs application

```shell
npx create-node-basic [YOUR_PROJECT_NAME]
```

## Folder Structure
- Your project get this structure
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
│   Dockerfile.test
│   Dockerfile.dev
│   babel.config.js
│   package-lock.json
│   package.json
│   tsconfig.json
│   tsconfig.spec.json
│   pm2.json
│   nginx
|   │   default.conf
|   │   Dockerfile
│   __tests__
│   └───unit
|   │   |  example.test.ts
|   │   |  redis.test.ts
│   └───integration
|   │   |  example.test.ts
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

## Basic Scripts In Project

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

## Docker Scripts In Project

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

## Future Features

- [ ] Explain how design patters used in your initial configuration of project
- [ ] Explain how to use your initial configuration of project
- [x] Add option to use Redis as cache
- [x] Add options to get initial Dockerfile and docker-compose.yml to run your project in docker
- [ ] Add options to get initial configuration to run your project in Kubernetes
