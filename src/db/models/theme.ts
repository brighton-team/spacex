import { DataType } from 'sequelize-typescript';

export const Theme = {
  themeId: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataType.STRING,
    allowNull: false,
  },

  data: {
    type: DataType.JSON,
    allowNull: true,
  },
};
