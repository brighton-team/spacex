export interface IUser {
  id?: number | null;
  first_name?: string;
  second_name?: string;
  display_name?: string;
  login?: string;
  email?: string;
  phone?: string;
  avatar?: string;
  password?: string;
  password_confirm?: string;
}

export type SignInAction = {
  type: string;
  payload: IUser;
};

export type UserState = {
  user: IUser;
};

export interface IGameModal {

  isVisible: boolean;
}

export type GameModal = {
  type: string;
  payload: IGameModal;
};
