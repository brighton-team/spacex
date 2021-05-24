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
import { ActionType, UserState } from 'types/actionTypes';
import { ApiServiceInstance } from '../utils/ApiService/ApiService';
import { UserDataType } from '../pages/Login/Login';

export const getUserDataRequest = (): ActionType => ({
  type: GET_USER_DATA_REQUEST,
});

export const getUserDataSuccess = (userData: UserDataType): ActionType => ({
  type: GET_USER_DATA_SUCCESS,
  payload: userData,
});

export const getUserDataFailure = (): ActionType => ({
  type: GET_USER_DATA_FAILURE,
});

export const signInRequest = (): ActionType => ({
  type: SIGN_IN_REQUEST,
});

export const signInSuccess = (): ActionType => ({
  type: SIGN_IN_SUCCESS,
});

export const signInFailure = (): ActionType => ({
  type: SIGN_IN_FAILURE,
});

export const signUpRequest = (): ActionType => ({
  type: SIGN_UP_REQUEST,
});

export const signUpSuccess = (): ActionType => ({
  type: SIGN_UP_SUCCESS,
});

export const signUpFailure = (): ActionType => ({
  type: SIGN_UP_FAILURE,
});

export const logOutRequest = (): ActionType => ({
  type: LOG_OUT_REQUEST,
});

export const logOutSuccess = (): ActionType => ({
  type: LOG_OUT_SUCCESS,
});

export const logOutFailure = (): ActionType => ({
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

export const findOrCreateUserAction = (userData: UserDataType) => (
  dispatch: ThunkDispatch<UserState, void, Action>
): void => {
  ApiServiceInstance.findOrCreateUser(userData)
    .then(() => {
      dispatch(getUserDataSuccess(userData));
    })
    .catch(() => dispatch(getUserDataFailure()));
};

export const getUserDataAction = () => (dispatch: ThunkDispatch<UserState, void, Action>): void => {
  dispatch(getUserDataRequest());
  ApiServiceInstance.getUserData()
    .then((res) => {
      dispatch(findOrCreateUserAction(res));
    })
    .catch(() => dispatch(getUserDataFailure()));
};

export const signUpAction = (userData: UserDataType) => (
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

export const signInAction = (userData: UserDataType) => (
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
