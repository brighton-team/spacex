import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { User } from '../models/user';
import { Topic } from '../models/topic';
// eslint-disable-next-line import/no-cycle
import { Post } from '../models/post';
import { Theme } from '../models/theme';
import { UserTheme } from '../models/userTheme';
import { Feedback } from '../models/feedback';
import { updateOrCreate } from 'db/models/functions';

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
const themeModel = sequelize.define('theme', Theme);
const userThemeModel = sequelize.define('user_theme', UserTheme);
const feedbackModel = sequelize.define('feedback', Feedback);

userModel.hasMany(topicModel);
feedbackModel.belongsTo(userModel);
// userModel.hasMany(feedbackModel);
userModel.hasMany(postModel, { foreignKey: 'userId' });
postModel.belongsTo(userModel);
topicModel.hasMany(postModel);
themeModel.hasOne(userThemeModel, { foreignKey: 'themeId' });
userThemeModel.belongsTo(themeModel, { foreignKey: 'themeId' });

updateOrCreate(themeModel, { name: 'dark' }, { name: 'dark', data: '{}' });
updateOrCreate(themeModel, { name: 'light' }, { name: 'light', data: '{}' });
sequelize.topics = topicModel;
sequelize.feedback = feedbackModel;
sequelize.theme = themeModel;
sequelize.userTheme = userThemeModel;
sequelize.users = userModel;
sequelize.posts = postModel;

export default sequelize;
