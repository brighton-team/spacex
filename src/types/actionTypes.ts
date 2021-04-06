import { FormData } from 'pages/Login/Login';

export interface IUser {
  loaded?: boolean;
  isAuth?: boolean;
  data?: FormData;
}

export type SignInAction = {
  type: string;
  payload?: FormData;
};

export type UserState = {
  user: IUser;
};
