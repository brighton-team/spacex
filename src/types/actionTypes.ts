import { FormData } from 'pages/Login/Login';
import { RouterState } from 'connected-react-router';

export interface IUser {
  loaded?: boolean;
  isAuth?: boolean;
  isPasswordChanged: boolean;
  isAvatarChanged: boolean;
  data?: FormData;
}

export type SignInAction = {
  type: string;
  payload?: FormData;
};

export type UserState = {
  user: IUser;
  game: GameReducer;
  gameModal: IGameModal;
  router: RouterState;
};

export interface GameReducer {
  score: number;
  lives: number;
}

export interface IGameModal {
  isVisible: boolean;
  isVisibleGameOver: boolean;
}

export type GameModal = {
  type: string;
};
