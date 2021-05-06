import { UserDataType } from 'pages/Login/Login';
import { RouterState } from 'connected-react-router';

export interface IUser {
  loaded: boolean;
  isAuth?: boolean;
  isPasswordChanged: boolean;
  isAvatarChanged: boolean;
  data?: UserDataType;
}

export type ActionType = {
  type: string;
  payload?: UserDataType;
};

export type UserState = {
  user: IUser;
  game: GameReducer;
  gameModal: IGameModal;
  leaders: LeaderReducer;
  router: RouterState;
};

export interface GameReducer {
  score: number;
  lives: number;
}

export interface IGameModal {
  isVisiblePauseGame: boolean;
  isVisibleGameOver: boolean;
}

export type GameModal = {
  type: string;
};

export type Leader = {
  data: {
    userName: string;
    scorespacex: number;
  };
};

export type LeaderReducer = {
  data?: Array<Leader> | null;
};
