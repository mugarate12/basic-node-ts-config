const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: process.env.DEV_AND_TEST_USERNAME,
    password: process.env.DEV_AND_TEST_PASSWORD,
    database: process.env.DEV_DB_NAME,
    host: (process.env.DEV_AND_TEST_DB_HOSTNAME) || 'localhost',
    port: process.env.DEV_AND_TEST_DB_PORT,
    dialect: process.env.DEV_AND_TEST_DB_DIALECT,
    dialectOptions: {
      bigNumberStrings: true
    },
    storage: './data/db/database.sqlite'
  },
  test: {
    username: process.env.CI_DB_USERNAME,
    password: process.env.CI_DB_PASSWORD,
    database: process.env.CI_DB_NAME,
    host: '127.0.0.1',
    port: 3306,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
      bigNumberStrings: true
    }
  },
  production: {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    port: process.env.PROD_DB_PORT,
    dialect: process.env.PROD_DB_DIALECT,
    dialectOptions: {
      bigNumberStrings: true
    }
  }
};