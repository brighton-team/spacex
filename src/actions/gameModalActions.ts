import * as actionTypes from 'store/actionTypes';
import { IGameModal, GameModal } from 'types/actionTypes';

export const gameModalOpen = (pw: IGameModal): GameModal => {

  return {
    type: actionTypes.GAME_MODAL_OPEN,
    payload: {...pw},
  };
};

export const gameModalClose = (pw: IGameModal): GameModal => {
  return {
    type: actionTypes.GAME_MODAL_CLOSE,
    payload: {...pw},
  }
};
