import { UserDataType } from 'pages/Login/Login';
import { ForumTopic } from 'pages/Forum/Forum';
import { ForumTopicPost } from 'pages/ForumTopicView/ForumTopicView';
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
  fullscreen: IFullscreen;
  forum: ForumReducer;
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

export interface IFullscreen {
  fullscreenOn: boolean;
}
export type Fullscreen = {
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

export type ForumReducer = {
  topics: {
    [key: number]: ForumTopic;
  };
};

export type ForumAction = {
  type: string;
  payload?: {
    topic?: ForumTopic;
    topics?: Array<ForumTopic>;
    posts?: Array<ForumTopicPost>;
    topicId?: number;
  };
};
