import {
  GAME_OVER_MODAL_TOGGLE,
  INCREASE_GAME_SCORE,
  REDUCE_GAME_LIVES,
  RESTART_GAME,
} from 'store/actionTypes';
import { ActionType } from '../types/actionTypes';

export const increaseGameScore = (): ActionType => ({
  type: INCREASE_GAME_SCORE,
});

export const reduceGameLives = (): ActionType => ({
  type: REDUCE_GAME_LIVES,
});

export const restartGame = (): ActionType => ({
  type: RESTART_GAME,
});

export const gameOverAction = (): ActionType => ({
  type: GAME_OVER_MODAL_TOGGLE,
});
