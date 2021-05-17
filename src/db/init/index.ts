import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { User } from '../models/user';
import { Topic } from '../models/topic';
// eslint-disable-next-line import/no-cycle
import { Post } from '../models/post';

const sequelizeOptions: SequelizeOptions = {
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,

  dialect: 'postgres',
};

export const sequelize = new Sequelize(sequelizeOptions);

const userModel = sequelize.define('user', User);
const topicModel = sequelize.define('user', Topic);
const postModel = sequelize.define('user', Post);

userModel.hasMany(topicModel);
userModel.hasMany(postModel);
topicModel.hasMany(postModel);

export default sequelize;
