import express from 'express';
import cors from 'cors';
import http from 'http';
import { errors } from 'celebrate';
import swaggerUi from 'swagger-ui-express';
import Yaml from 'yamljs';
import path from 'path';

import { constants } from './config';
import routes from './routes';

const swaggerDocument = constants.applicationType === 'development' || constants.applicationType === 'test' || constants.applicationType === 'undefined' ?
  Yaml.load(path.resolve(__dirname, '..', 'docs', 'docs.yaml')) :
  Yaml.load(path.resolve(__dirname, '..', '..', 'docs', 'docs.yaml'));

const app = express();
const server = http.createServer(app);

app.use(cors({
  origin: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['*'],
  exposedHeaders: ['Authorization', 'Content-Type', 'Content-Disposition', 'Access-Control-Allow-Headers', 'Origin', 'Accept', 'X-Requested-With', 'filename'],
  preflightContinue: false,
  optionsSuccessStatus: 204
}));
app.use(express.json());

// use all routes settings
app.use(routes);

// use swagger documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// celebrate errors
app.use(errors());

export default server;