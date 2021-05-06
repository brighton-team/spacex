import axios from 'axios';

import {
  SIGN_IN_URL,
  SIGN_UP_URL,
  GET_USER_URL,
  LOG_OUT_URL,
  PUT_USER_DATA_URL,
  CHANGE_USER_PASSWORD_URL,
  CHANGE_USER_AVATAR_URL,
} from 'consts/routes';

import { UserDataType } from 'pages/Login/Login';
import { PasswordData } from 'actions/profileActions';

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
}

export const ApiServiceInstance = new ApiService();
