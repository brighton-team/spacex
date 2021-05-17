import { DataType } from 'sequelize-typescript';

export const Topic = {
  id: {
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataType.STRING,
    allowNull: false,
  },
  userId: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  time: {
    type: DataType.DATE,
    allowNull: true,
  },
};
