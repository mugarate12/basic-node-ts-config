# Basic Configuration to Nodejs With Express and Typescript

> this module serving a basic structure and configuration of nodejs API with express and typescript  

## Summary

- [Getting Started](#getting-started)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Scripts in project](#scripts-in-project)
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
│   Dockerfile
│   babel.config.js
│   package-lock.json
│   package.json
│   tsconfig.json
│   tsconfig.spec.json
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

## Scripts in project
- Your package.json have initial commands to build, run and create server to development

build your project:
```shell
npm run build
```

build your project and immediately run your app builded:
```shell
npm start
```

run project in development build:
```shell
npm run dev
```

run all of tests in project:
```shell
npm run test
```

- Test your application run correctlly to send HTTP GET to localhost:8000

## Future Features

- [ ] Explain how design patters used in your initial configuration of project
- [ ] Explain how to use your initial configuration of project
- [x] Add option to use Redis as cache
- [x] Add options to get initial Dockerfile and docker-compose.yml to run your project in docker
- [ ] Add options to get initial configuration to run your project in Kubernetes
