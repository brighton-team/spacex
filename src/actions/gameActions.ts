import {
  GAME_OVER_MODAL_TOGGLE,
  INCREASE_GAME_SCORE,
  REDUCE_GAME_LIVES,
  RESTART_GAME,
} from 'store/actionTypes';
import { SignInAction } from '../types/actionTypes';

export const increaseGameScore = (): SignInAction => ({
  type: INCREASE_GAME_SCORE,
});

export const reduceGameLives = (): SignInAction => ({
  type: REDUCE_GAME_LIVES,
});

export const restartGame = (): SignInAction => ({
  type: RESTART_GAME,
});

export const gameOverAction = (): SignInAction => ({
  type: GAME_OVER_MODAL_TOGGLE,
});
