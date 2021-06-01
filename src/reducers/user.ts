import { ActionType, IUser } from 'types/actionTypes';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  LOG_OUT_REQUEST,
  LOG_OUT_FAILURE,
  LOG_OUT_SUCCESS,
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_FAILURE,
  GET_USER_DATA_SUCCESS,
  CHANGE_USER_DATA_REQUEST,
  CHANGE_USER_DATA_FAILURE,
  CHANGE_USER_DATA_SUCCESS,
  CHANGE_USER_THEME_REQUEST,
  CHANGE_USER_THEME_FAILURE,
  CHANGE_USER_THEME_SUCCESS,
  GET_USER_THEME_FAILURE,
  GET_USER_THEME_REQUEST,
  GET_USER_THEME_SUCCESS,
  CHANGE_USER_PASSWORD_REQUEST,
  CHANGE_USER_PASSWORD_FAILURE,
  CHANGE_USER_PASSWORD_SUCCESS,
  CHANGE_USER_AVATAR_REQUEST,
  CHANGE_USER_AVATAR_FAILURE,
  CHANGE_USER_AVATAR_SUCCESS,
} from 'store/actionTypes';

export const initialState: IUser = {
  isAuth: false,
  loaded: true,
  isPasswordChanged: false,
  isAvatarChanged: false,
  theme: { name: 'natural' },
};

export const userReducer = (state: IUser = initialState, action: ActionType): IUser => {
  switch (action.type) {
    case CHANGE_USER_AVATAR_REQUEST:
      return {
        ...state,
      };
    case CHANGE_USER_AVATAR_SUCCESS:
      return {
        ...state,
        data: { ...action.payload },
      };
    case CHANGE_USER_AVATAR_FAILURE:
      return {
        ...state,
      };
    case CHANGE_USER_PASSWORD_REQUEST:
      return {
        ...state,
        isPasswordChanged: false,
      };
    case CHANGE_USER_PASSWORD_SUCCESS:
      return {
        ...state,
        isPasswordChanged: true,
      };
    case CHANGE_USER_PASSWORD_FAILURE:
      return {
        ...state,
        isPasswordChanged: false,
      };
    case CHANGE_USER_DATA_REQUEST:
      return {
        ...state,
        loaded: false,
      };
    case CHANGE_USER_DATA_SUCCESS:
      return {
        ...state,
        data: { ...action.payload },
        isAuth: true,
        loaded: true,
      };
    case CHANGE_USER_DATA_FAILURE:
      return {
        ...state,
        isAuth: false,
        loaded: true,
      };
    case CHANGE_USER_THEME_REQUEST:
      return {
        ...state,
      };
    case CHANGE_USER_THEME_SUCCESS:
      return {
        ...state,
        theme: action.payload,
      };
    case CHANGE_USER_THEME_FAILURE:
      return {
        ...state,
      };
    case GET_USER_THEME_REQUEST:
      return {
        ...state,
      };
    case GET_USER_THEME_SUCCESS:
      return {
        ...state,
        theme: action.payload,
      };
    case GET_USER_THEME_FAILURE:
      return {
        ...state,
      };
    case GET_USER_DATA_REQUEST:
      return {
        ...state,
        loaded: false,
      };
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        data: { ...action.payload },
        isAuth: true,
        loaded: true,
      };
    case GET_USER_DATA_FAILURE:
      return {
        ...state,
        isAuth: false,
        loaded: true,
      };
    case SIGN_IN_REQUEST:
      return {
        ...state,
        loaded: false,
      };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loaded: true,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        isAuth: false,
        loaded: true,
      };
    case SIGN_UP_REQUEST:
      return {
        ...state,
        loaded: false,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isAuth: true,
        loaded: true,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isAuth: false,
        loaded: true,
      };
    case LOG_OUT_REQUEST:
      return {
        ...state,
        loaded: false,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        isAuth: false,
        loaded: true,
      };
    case LOG_OUT_FAILURE:
      return {
        ...state,
        loaded: true,
      };
    default:
      return state;
  }
};
