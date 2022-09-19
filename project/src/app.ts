import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import { errors } from 'celebrate';
import path from 'path';

import routes from './routes';

dotenv.config();
const applicationType = String(process.env.NODE_ENV);

const app = express();
const server = http.createServer(app);
const processName = process.env.name || 'primary';

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

// celebrate errors
app.use(errors());

export default server;