import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

import {
  CHANGE_USER_DATA_REQUEST,
  CHANGE_USER_DATA_FAILURE,
  CHANGE_USER_DATA_SUCCESS,
  CHANGE_USER_PASSWORD_REQUEST,
  CHANGE_USER_PASSWORD_FAILURE,
  CHANGE_USER_PASSWORD_SUCCESS,
  CHANGE_USER_AVATAR_REQUEST,
  CHANGE_USER_AVATAR_FAILURE,
  CHANGE_USER_AVATAR_SUCCESS,
} from 'store/actionTypes';
import { SignInAction, UserState } from 'types/actionTypes';

import { ApiServiceInstance } from 'utils/ApiService/ApiService';
import { FormData } from 'pages/Login/Login';

export type PasswordData = {
  oldPassword: string;
  newPassword: string;
};

export const changeUserAvatarRequest = (): SignInAction => ({
  type: CHANGE_USER_AVATAR_REQUEST,
});

export const changeUserAvatarSuccess = (data: FormData): SignInAction => ({
  type: CHANGE_USER_AVATAR_SUCCESS,
  payload: data,
});

export const changeUserAvatarFailure = (): SignInAction => ({
  type: CHANGE_USER_AVATAR_FAILURE,
});

export const changeUserPasswordRequest = (): SignInAction => ({
  type: CHANGE_USER_PASSWORD_REQUEST,
});

export const changeUserPasswordSuccess = (): SignInAction => ({
  type: CHANGE_USER_PASSWORD_SUCCESS,
});

export const changeUserPasswordFailure = (): SignInAction => ({
  type: CHANGE_USER_PASSWORD_FAILURE,
});

export const changeUserDataRequest = (): SignInAction => ({
  type: CHANGE_USER_DATA_REQUEST,
});

export const changeUserDataSuccess = (userData: FormData): SignInAction => ({
  type: CHANGE_USER_DATA_SUCCESS,
  payload: userData,
});

export const changeUserDataFailure = (): SignInAction => ({
  type: CHANGE_USER_DATA_FAILURE,
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const changeUserAvatarAction = (userData: any) => (
  dispatch: ThunkDispatch<UserState, void, Action>
): void => {
  dispatch(changeUserAvatarRequest());
  ApiServiceInstance.changeUserAvatar(userData)
    .then((response) => {
      const { status, data } = response;
      if (status === 200) {
        dispatch(changeUserAvatarSuccess(data));
      }
    })
    .catch(() => dispatch(changeUserAvatarFailure()));
};

export const changeUserPasswordAction = (userData: PasswordData) => (
  dispatch: ThunkDispatch<UserState, void, Action>
): void => {
  dispatch(changeUserPasswordRequest());
  ApiServiceInstance.changeUserPassword(userData)
    .then((response) => {
      const { status } = response;
      if (status === 200) {
        dispatch(changeUserPasswordSuccess());
      }
    })
    .catch(() => dispatch(changeUserPasswordFailure()));
};

export const changeUserDataAction = (userData: FormData) => (
  dispatch: ThunkDispatch<UserState, void, Action>
): void => {
  dispatch(changeUserDataRequest());
  ApiServiceInstance.putUserData(userData)
    .then((response) => {
      const { data, status } = response;
      if (status === 200) {
        dispatch(changeUserDataSuccess(data));
      }
    })
    .catch(() => dispatch(changeUserDataFailure()));
};
