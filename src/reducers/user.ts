import { SignInAction, IUser } from 'types/actionTypes';
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
} from 'store/actionTypes';

const initialState: IUser = {
  isAuth: false,
  loaded: true,
};

export const userReducer = (state: IUser = initialState, action: SignInAction): IUser => {
  switch (action.type) {
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
