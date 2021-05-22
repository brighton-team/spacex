import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { User } from '../models/user';
import { Topic } from '../models/topic';
// eslint-disable-next-line import/no-cycle
import { Post } from '../models/post';
import { Feedback } from '../models/feedback';

const sequelizeOptions: SequelizeOptions = {
  host: 'postgres',
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,

  dialect: 'postgres',
};

const sequelize: any = new Sequelize(
  sequelizeOptions.database,
  sequelizeOptions.username,
  sequelizeOptions.password,
  {
    host: sequelizeOptions.host,
    dialect: sequelizeOptions.dialect,
  }
);

const userModel = sequelize.define('user', User);
const topicModel = sequelize.define('topic', Topic);
const postModel = sequelize.define('post', Post);
const feedbackModel = sequelize.define('feedback', Feedback);

userModel.hasMany(topicModel);
feedbackModel.belongsTo(userModel);
// userModel.hasMany(feedbackModel);
userModel.hasMany(postModel);
topicModel.hasMany(postModel);

sequelize.topics = topicModel;
sequelize.feedback = feedbackModel;
sequelize.users = userModel;

export default sequelize;
