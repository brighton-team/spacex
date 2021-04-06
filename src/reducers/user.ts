import { SignInAction, IUser } from 'types/actionTypes';
import { SIGN_IN_SUCCESS } from '../store/actionTypes';

const initialState: IUser = {
  id: null,
};

export const userReducer = (state: IUser = initialState, action: SignInAction): IUser => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      const user: IUser = action.payload;
      return {
        ...state,
        ...user,
      };
    default:
      return state;
  }
};
