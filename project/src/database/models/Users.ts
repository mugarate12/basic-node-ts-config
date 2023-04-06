import {
  Model,
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';

import { database } from './../../config';

class Users extends Model<InferAttributes<Users>, InferCreationAttributes<Users>> {
  declare id: string;
  
  declare name: string;
  declare email: string;

  declare username: string;
  declare password: string;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
};

Users.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false
  }
}, { sequelize: database, modelName: 'users' });

export default Users;