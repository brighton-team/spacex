export const signUp = '/signup';
export const signIn = '/signin';
export const leaders = '/leaders';
export const forum = '/forum';
export const profile = '/profile';
export const game = '/play';
export const error = '/error';

const BASE_URL = 'https://ya-praktikum.tech/api/v2';
export const BASE_AUTH_URL = `${BASE_URL}/auth`;
export const BASE_OAUTH_URL = `${BASE_URL}/oauth/yandex`;
export const SIGN_UP_URL = `${BASE_AUTH_URL}/signup`;
export const SIGN_IN_URL = `${BASE_AUTH_URL}/signin`;
export const LOG_OUT_URL = `${BASE_AUTH_URL}/logout`;
export const GET_USER_URL = `${BASE_AUTH_URL}/user`;
export const PUT_USER_DATA_URL = `${BASE_URL}/user/profile`;
export const CHANGE_USER_PASSWORD_URL = `${BASE_URL}/user/password`;
export const CHANGE_USER_AVATAR_URL = `${BASE_URL}/user/profile/avatar`;
