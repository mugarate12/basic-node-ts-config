import dotenv from 'dotenv';
import { Dialect } from 'sequelize';
import path from 'path';

dotenv.config();

interface databaseConnectionConfigInterface {
  dialect: Dialect;
  host: string;
  port: number;
  username: string;
  password: string;
  name: string;
};

const applicationType = String(process.env.NODE_ENV) || 'development';
const processName = process.env.name || 'primary';
const JWT_SECRET = process.env.JWT_SECRET || 'secret'

const PORT = !process.env.PORT ? 8000 : Number(process.env.PORT);

// database config
function getDatabaseConnection(applicationType: string): databaseConnectionConfigInterface {
  if (applicationType === 'production') {
    return {
      dialect: String(process.env.PROD_DB_DIALECT) as Dialect,
      host: String(process.env.PROD_DB_HOSTNAME),
      port: Number(process.env.PROD_DB_PORT),
      username: String(process.env.PROD_DB_USERNAME),
      password: String(process.env.PROD_DB_PASSWORD),
      name: String(process.env.PROD_DB_NAME)
    };
  };

  let databaseName = '';
  if (applicationType === 'development') {
    databaseName = String(process.env.DEV_DB_NAME);
  } else if (applicationType === 'test') {
    databaseName = String(process.env.TEST_DB_NAME);
  };

  return {
    dialect: String(process.env.DEV_AND_TEST_DB_DIALECT) as Dialect,
    host: String(process.env.DEV_AND_TEST_DB_HOSTNAME),
    port: Number(process.env.DEV_AND_TEST_DB_PORT),
    username: String(process.env.DEV_AND_TEST_USERNAME),
    password: String(process.env.DEV_AND_TEST_PASSWORD),
    name: databaseName
  };
};
const DATABASE_CONFIG_PATH = applicationType === 'production' ?
  path.resolve(__dirname, '..', '..', '..', 'database.js') :
  path.resolve(__dirname, '..', '..', 'database.js');
const database = getDatabaseConnection(applicationType);

export default {
  applicationType,
  processName,

  PORT,
  JWT_SECRET,

  database: {
    configPath: DATABASE_CONFIG_PATH,

    dialect: database.dialect,
    host: database.host,
    port: database.port,
    username: database.username,
    password: database.password,
    name: database.name
  },
};
