export const signUp = '/signup';
export const signIn = '/signin';
export const leaders = '/leaders';
export const forum = '/forum';
export const profile = '/profile';
export const game = '/play';
export const error = '/error';
export const feedback = '/feedback';

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
export const PUT_GAME_LEADER_DATA = `${BASE_URL}/leaderboard`;
export const GET_GAME_LEADER_DATA = `${BASE_URL}/leaderboard/all`;

const BASE_LOCAL_URL = '/api';
const CREATE = '/create';

const FEEDBACK = '/feedback';
export const CREATE_FEEDBACK = `${BASE_LOCAL_URL}${FEEDBACK}${CREATE}`;

const USER = '/user';
export const FIND_OR_CREATE_USER = `${BASE_LOCAL_URL}${USER}/find-or-create`;

const FORUM_TOPICS = '/forum-topics';
export const GET_FORUM_TOPICS = `${BASE_LOCAL_URL}${FORUM_TOPICS}`;
export const CREATE_FORUM_TOPIC = `${BASE_LOCAL_URL}${FORUM_TOPICS}`;

const FORUM_POSTS = '/forum-posts';
export const GET_FORUM_TOPIC_POSTS = `${BASE_LOCAL_URL}${FORUM_POSTS}`;
export const CREATE_FORUM_TOPIC_POST = `${BASE_LOCAL_URL}${FORUM_POSTS}`;
