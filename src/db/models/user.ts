import { DataType } from 'sequelize-typescript';

export const User = {
  id: {
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  login: {
    type: DataType.STRING,
    allowNull: false,
  },
};
