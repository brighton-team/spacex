import { DataType } from 'sequelize-typescript';

export const Feedback = {
  id: {
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataType.STRING,
    allowNull: false,
  },
  email: {
    type: DataType.STRING,
    allowNull: false,
  },
  text: {
    type: DataType.STRING,
    allowNull: false,
  },
  userId: {
    type: DataType.NUMBER,
    allowNull: false,
  },
};
