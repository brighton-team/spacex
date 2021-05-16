import axios from 'axios';

import {
  SIGN_IN_URL,
  SIGN_UP_URL,
  GET_USER_URL,
  LOG_OUT_URL,
  PUT_USER_DATA_URL,
  CHANGE_USER_PASSWORD_URL,
  CHANGE_USER_AVATAR_URL,
  BASE_OAUTH_URL,
  signIn,
  PUT_GAME_LEADER_DATA,
  GET_GAME_LEADER_DATA,
} from 'consts/routes';

import { UserDataType } from 'pages/Login/Login';
import { PasswordData } from 'actions/profileActions';

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

  getCodefromCallback() {
    const params = new URLSearchParams(document.location.search);
    return params.get('code');
  }

  async getClientID() {
    const redirectURL = window.location.origin + signIn;
    return this.instanceAxios.get(`${BASE_OAUTH_URL}/service-id`);
  }

  async getCodeOAuth() {
    const response = await this.getClientID();
    const clientId = response.data.service_id;
    const url = `https://oauth.yandex.ru/authorize?response_type=code&client_id=${clientId}`;
    document.location.href = url;
  }

  postCodeOauth(code) {
    return this.instanceAxios.post(BASE_OAUTH_URL, { code });
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
}

export const ApiServiceInstance = new ApiService();
