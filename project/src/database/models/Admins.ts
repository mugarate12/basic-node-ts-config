import {
  Model,
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
} from 'sequelize';

import Users from './Users';
import { database } from './../../config';

/**
 * @description analystID not FK to analyst to get OPTIONAL reference to analyst
 */
class Admins extends Model<InferAttributes<Admins>, InferCreationAttributes<Admins>> {
  declare id: string;

  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;

  declare user_id_FK: string;
}

Admins.init({
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
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
  },

  user_id_FK: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Users,
      key: 'id'
    }
  }
}, { sequelize: database, tableName: 'admins' });

Admins.belongsTo(Users, { foreignKey: 'user_id_FK' });

export default Admins;