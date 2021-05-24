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
import { ActionType, UserState } from 'types/actionTypes';

import { ApiServiceInstance } from 'utils/ApiService/ApiService';
import { UserDataType } from 'pages/Login/Login';

export type PasswordData = {
  oldPassword: string;
  newPassword: string;
};

export const changeUserAvatarRequest = (): ActionType => ({
  type: CHANGE_USER_AVATAR_REQUEST,
});

export const changeUserAvatarSuccess = (data: UserDataType): ActionType => ({
  type: CHANGE_USER_AVATAR_SUCCESS,
  payload: data,
});

export const changeUserAvatarFailure = (): ActionType => ({
  type: CHANGE_USER_AVATAR_FAILURE,
});

export const changeUserPasswordRequest = (): ActionType => ({
  type: CHANGE_USER_PASSWORD_REQUEST,
});

export const changeUserPasswordSuccess = (): ActionType => ({
  type: CHANGE_USER_PASSWORD_SUCCESS,
});

export const changeUserPasswordFailure = (): ActionType => ({
  type: CHANGE_USER_PASSWORD_FAILURE,
});

export const changeUserDataRequest = (): ActionType => ({
  type: CHANGE_USER_DATA_REQUEST,
});

export const changeUserDataSuccess = (userData: UserDataType): ActionType => ({
  type: CHANGE_USER_DATA_SUCCESS,
  payload: userData,
});

export const changeUserDataFailure = (): ActionType => ({
  type: CHANGE_USER_DATA_FAILURE,
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const changeUserAvatarAction = (userData: FormData) => (
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

export const changeUserDataAction = (userData: UserDataType) => (
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
