import { DataType } from 'sequelize-typescript';

export const UserTheme = {
  userthemeId: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  themeId: {
    type: DataType.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataType.INTEGER,
    allowNull: false,
    unique: true,

  },
};
