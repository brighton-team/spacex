import axios from 'axios';

import { SIGN_IN_URL, SIGN_UP_URL } from 'consts/routes';

import { FormData } from 'pages/Login/Login';

class ApiService {
  signIn(values: FormData, fn: () => void) {
    return this.instanceAxios.post(SIGN_IN_URL, values).then((response) => {
      if (response.status === 200) {
        fn();
      }
    });
  }

  signUp(values: FormData, fn: () => void) {
    return this.instanceAxios.post(SIGN_UP_URL, values).then((response) => {
      if (response.status === 200) {
        fn();
      }
    });
  }

  instanceAxios = axios.create({
    withCredentials: true,
  });
}

export const ApiServiceInstance = new ApiService();
