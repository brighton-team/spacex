import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';

import {
  CHANGE_USER_DATA_REQUEST,
  CHANGE_USER_DATA_FAILURE,
  CHANGE_USER_DATA_SUCCESS,
} from 'store/actionTypes';
import { SignInAction, UserState } from 'types/actionTypes';
import { ApiServiceInstance } from '../utils/ApiService/ApiService';
import { FormData } from '../pages/Login/Login';

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

export const changeUserDataAction = (userData: FormData) => (
  dispatch: ThunkDispatch<UserState, void, Action>
) => {
  dispatch(changeUserDataRequest());
  ApiServiceInstance.putUserData(userData)
    .then((status) => {
      console.log('status', status);
      // if (status === 200) {
      //   dispatch(changeUserDataSuccess());
      // }
    })
    .catch(() => dispatch(changeUserDataFailure()));
};
