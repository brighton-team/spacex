import axios from 'axios';

import {
  SIGN_IN_URL,
  SIGN_UP_URL,
  GET_USER_URL,
  LOG_OUT_URL,
  PUT_USER_DATA_URL,
  CHANGE_USER_PASSWORD_URL,
  CHANGE_USER_AVATAR_URL,
  PUT_GAME_LEADER_DATA,
  GET_GAME_LEADER_DATA,
  CREATE_FEEDBACK,
  FIND_OR_CREATE_USER,
  GET_FORUM_TOPICS,
  CREATE_FORUM_TOPIC,
  GET_FORUM_TOPIC_POSTS,
  CREATE_FORUM_TOPIC_POST,
} from 'consts/routes';

import { UserDataType } from 'pages/Login/Login';
import { PasswordData } from 'actions/profileActions';
import { FeedbackData } from 'actions/feedbackAction';
import { ForumTopic } from 'pages/Forum/Forum';
import { ForumTopicPost } from 'pages/ForumTopicView/ForumTopicView';
import { LeaderDataRequestType, LeaderDataType } from '../../actions/leadersActions';

class ApiService {
  instanceAxios = axios.create({
    withCredentials: true,
  });

  async signIn(values: UserDataType) {
    return this.instanceAxios
      .post(SIGN_IN_URL, values)
      .then((response) => response.status)
      .catch((err) => {
        throw err;
      });
  }

  async signUp(values: UserDataType) {
    return this.instanceAxios
      .post(SIGN_UP_URL, values)
      .then((response) => response.status)
      .catch((err) => {
        throw err;
      });
  }

  async getUserData() {
    return this.instanceAxios
      .get(GET_USER_URL)
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        throw err;
      });
  }

  async logOut() {
    return this.instanceAxios
      .post(LOG_OUT_URL)
      .then((response) => {
        return response.status;
      })
      .catch((err) => {
        throw err;
      });
  }

  async putUserData(values: UserDataType) {
    return this.instanceAxios
      .put(PUT_USER_DATA_URL, values)
      .then((response) => response)
      .catch((err) => {
        throw err;
      });
  }

  async changeUserPassword(values: PasswordData) {
    return this.instanceAxios
      .put(CHANGE_USER_PASSWORD_URL, values)
      .then((response) => response)
      .catch((err) => {
        throw err;
      });
  }

  async changeUserAvatar(values: any) {
    return this.instanceAxios
      .put(CHANGE_USER_AVATAR_URL, values)
      .then((response) => response)
      .catch((err) => {
        throw err;
      });
  }

  async putGameLeaderData(values: LeaderDataType) {
    return this.instanceAxios
      .post(PUT_GAME_LEADER_DATA, values)
      .then((response) => response)
      .catch((err) => {
        throw err;
      });
  }

  async getGameLeaderData(values: LeaderDataRequestType) {
    return this.instanceAxios
      .post(GET_GAME_LEADER_DATA, values)
      .then((response) => response)
      .catch((err) => {
        throw err;
      });
  }

  async createFeedback(values: FeedbackData) {
    return this.instanceAxios
      .post(CREATE_FEEDBACK, values)
      .then((response) => response)
      .catch((err) => {
        throw err;
      });
  }

  async findOrCreateUser(values: UserDataType) {
    return this.instanceAxios
      .post(FIND_OR_CREATE_USER, values)
      .then((response) => response)
      .catch((err) => {
        throw err;
      });
  }
  async listTheme() {
    return this.instanceAxios
      .get('/api/theme/list') .then((response) => response)
      .catch((err) => {
        throw err;
      });
  }


  async setTheme(id,themeId) {
    return this.instanceAxios
      .post('/api/theme/set', [id,themeId]) .then((response) => response)
      .catch((err) => {
        throw err;
      });
  }

  async getForumTopics() {
    return this.instanceAxios
      .get(GET_FORUM_TOPICS)
      .then((response) => response)
      .catch((err) => {
        throw err;
      });
  }

  async createForumTopic(values: ForumTopic) {
    return this.instanceAxios
      .post(CREATE_FORUM_TOPIC, values)
      .then((response) => response)
      .catch((err) => {
        throw err;
      });
  }

  async getForumTopicPosts(topicId: number) {
    return this.instanceAxios
      .get(`${GET_FORUM_TOPIC_POSTS}/${topicId}`)
      .then((response) => response)
      .catch((err) => {
        throw err;
      });
  }

  async createForumTopicPost(values: ForumTopicPost) {
    return this.instanceAxios
      .post(CREATE_FORUM_TOPIC_POST, values)
      .then((response) => response)
      .catch((err) => {
        throw err;
      });
  }
}

export const ApiServiceInstance = new ApiService();
