import { Sequelize } from "sequelize";

import constants from "./variables";

const sequelize = constants.applicationType === 'production' ? new Sequelize(
  constants.database.name,
  constants.database.username,
  constants.database.password,
  {
    host: constants.database.host,
    port: constants.database.port,
    dialect: constants.database.dialect,
    logging: false
  }
) : new Sequelize(
  constants.database.name,
  constants.database.username,
  constants.database.password,
  {
    host: constants.database.host,
    port: constants.database.port,
    dialect: constants.database.dialect,
    logging: false,
    storage: './../../data/db/database.sqlite'
  }
);

export default sequelize;