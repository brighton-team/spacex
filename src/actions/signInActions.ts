import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

import {
  SIGN_IN_REQUEST,
  SIGN_IN_FAILURE,
  SIGN_IN_SUCCESS,
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
import { SignInAction, UserState } from 'types/actionTypes';
import { ApiServiceInstance } from '../utils/ApiService/ApiService';
import { FormData } from '../pages/Login/Login';

export const getUserDataRequest = (): SignInAction => ({
  type: GET_USER_DATA_REQUEST,
});

export const getUserDataSuccess = (userData: FormData): SignInAction => ({
  type: GET_USER_DATA_SUCCESS,
  payload: userData,
});

export const getUserDataFailure = (): SignInAction => ({
  type: GET_USER_DATA_FAILURE,
});

export const signInRequest = (): SignInAction => ({
  type: SIGN_IN_REQUEST,
});

export const signInSuccess = (): SignInAction => ({
  type: SIGN_IN_SUCCESS,
});

export const signInFailure = (): SignInAction => ({
  type: SIGN_IN_FAILURE,
});

export const signUpRequest = (): SignInAction => ({
  type: SIGN_UP_REQUEST,
});

export const signUpSuccess = (): SignInAction => ({
  type: SIGN_UP_SUCCESS,
});

export const signUpFailure = (): SignInAction => ({
  type: SIGN_UP_FAILURE,
});

export const logOutRequest = (): SignInAction => ({
  type: LOG_OUT_REQUEST,
});

export const logOutSuccess = (): SignInAction => ({
  type: LOG_OUT_SUCCESS,
});

export const logOutFailure = (): SignInAction => ({
  type: LOG_OUT_FAILURE,
});

export const logOutAction = () => (dispatch: ThunkDispatch<UserState, void, Action>): void => {
  dispatch(logOutRequest());
  ApiServiceInstance.logOut()
    .then((status) => {
      if (status === 200) {
        dispatch(logOutSuccess());
      }
    })
    .catch(() => dispatch(logOutFailure()));
};

export const getUserDataAction = () => (dispatch: ThunkDispatch<UserState, void, Action>): void => {
  dispatch(getUserDataRequest());
  ApiServiceInstance.getUserData()
    .then((res) => {
      dispatch(getUserDataSuccess(res));
    })
    .catch(() => dispatch(getUserDataFailure()));
};

export const signUpAction = (userData: FormData) => (
  dispatch: ThunkDispatch<UserState, void, Action>
): void => {
  dispatch(signUpRequest());
  ApiServiceInstance.signUp(userData)
    .then((status) => {
      if (status === 200) {
        dispatch(signUpSuccess());
        dispatch(getUserDataAction());
      }
    })
    .catch(() => dispatch(signUpFailure()));
};

export const signInAction = (userData: FormData) => (
  dispatch: ThunkDispatch<UserState, void, Action>
): void => {
  dispatch(signInRequest());
  ApiServiceInstance.signIn(userData)
    .then((status) => {
      if (status === 200) {
        dispatch(signInSuccess());
        dispatch(getUserDataAction());
      }
    })
    .catch(() => dispatch(signInFailure()));
};
