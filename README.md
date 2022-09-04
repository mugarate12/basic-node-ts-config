# Basic Configuration to Nodejs With Express and Typescript

this module serving a basic structure and configuration of nodejs API with express and typescrit  

## Usage

- Use this command in terminal and get initial structure, modules and development ambient to start your nodejs application

```shell
npx create-node-basic [YOUR_PROJECT_NAME]
```

- Your project get this structure
```
project
│   .env.example
│   .gitignore
│   CHANGELOG.md
│   package-lock.json
│   package.json
│   README.md
│   tsconfig.json
└───src
|       app.ts
│   └───routes
│   |   │   example.routes.ts
│   |   │   index.ts
│   |   
|   └───utils
│       │   createToken.ts
│       │   handleError.ts
│       │   index.ts
```

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

- Test your application run correctlly to send HTTP GET to localhost:8000