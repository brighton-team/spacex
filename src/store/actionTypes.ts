const REQUEST = '_REQUEST';
const SUCCESS = '_SUCCESS';
const FAILURE = '_FAILURE';

const SIGN_IN = 'SIGN_IN';
const SIGN_UP = 'SIGN_UP';
const LOG_OUT = 'LOG_OUT';
const GET_USER_DATA = 'GET_USER_DATA';

export const SIGN_IN_REQUEST = `${SIGN_IN}${REQUEST}`;
export const SIGN_IN_SUCCESS = `${SIGN_IN}${SUCCESS}`;
export const SIGN_IN_FAILURE = `${SIGN_IN}${FAILURE}`;

export const SIGN_UP_REQUEST = `${SIGN_UP}${REQUEST}`;
export const SIGN_UP_SUCCESS = `${SIGN_UP}${SUCCESS}`;
export const SIGN_UP_FAILURE = `${SIGN_UP}${FAILURE}`;

export const LOG_OUT_REQUEST = `${LOG_OUT}${REQUEST}`;
export const LOG_OUT_SUCCESS = `${LOG_OUT}${SUCCESS}`;
export const LOG_OUT_FAILURE = `${LOG_OUT}${FAILURE}`;

export const GET_USER_DATA_REQUEST = `${GET_USER_DATA}${REQUEST}`;
export const GET_USER_DATA_SUCCESS = `${GET_USER_DATA}${SUCCESS}`;
export const GET_USER_DATA_FAILURE = `${GET_USER_DATA}${FAILURE}`;
