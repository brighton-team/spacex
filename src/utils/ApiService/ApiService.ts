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

import { FormData } from 'pages/Login/Login';
import { PasswordData } from 'actions/profileActions';

class ApiService {
  signIn(values: FormData) {
    return this.instanceAxios
      .post(SIGN_IN_URL, values)
      .then((response) => response.status)
      .catch((err) => {
        throw err;
      });
  }

  signUp(values: FormData) {
    return this.instanceAxios
      .post(SIGN_UP_URL, values)
      .then((response) => response.status)
      .catch((err) => {
        throw err;
      });
  }

  getUserData() {
    return this.instanceAxios
      .get(GET_USER_URL)
      .then(({ data }) => {
        return data;
      })
      .catch((err) => {
        throw err;
      });
  }

  logOut() {
    return this.instanceAxios
      .post(LOG_OUT_URL)
      .then((response) => {
        return response.status;
      })
      .catch((err) => {
        throw err;
      });
  }

  putUserData(values: FormData) {
    return this.instanceAxios
      .put(PUT_USER_DATA_URL, values)
      .then((response) => response)
      .catch((err) => {
        throw err;
      });
  }

  changeUserPassword(values: PasswordData) {
    return this.instanceAxios
      .put(CHANGE_USER_PASSWORD_URL, values)
      .then((response) => response)
      .catch((err) => {
        throw err;
      });
  }

  changeUserAvatar(values: any) {
    return this.instanceAxios
      .put(CHANGE_USER_AVATAR_URL, values)
      .then((response) => response)
      .catch((err) => {
        throw err;
      });
  }

  instanceAxios = axios.create({
    withCredentials: true,
  });
}

export const ApiServiceInstance = new ApiService();
