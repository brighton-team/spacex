import { DataType } from 'sequelize-typescript';

export const Post = {
  id: {
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  text: {
    type: DataType.STRING,
    allowNull: false,
  },
  postId: {
    type: DataType.INTEGER,
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
