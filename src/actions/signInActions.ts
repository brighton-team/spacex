import * as actionTypes from 'store/actionTypes';
import { IUser, SignInAction } from 'types/actionTypes';

export const signIn = (user: IUser): SignInAction => {
  return {
    type: actionTypes.SIGN_IN_SUCCESS,
    payload: user,
  };
};
