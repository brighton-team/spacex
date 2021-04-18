import { GameModal, IGameModal } from 'types/actionTypes';
import { GAME_MODAL_CLOSE, GAME_MODAL_OPEN, GAME_OVER_MODAL_TOGGLE } from '../store/actionTypes';

const initialState: IGameModal = {
  isVisible: false,
  isVisibleGameOver: false,
};

export const gameModalReducer = (state: IGameModal, action: GameModal): IGameModal => {
  const { payload, type } = action;
  switch (type) {
    case GAME_MODAL_OPEN:
      return {
        ...state,
        ...payload,
      };
    case GAME_OVER_MODAL_TOGGLE:
      return {
        ...state,
        isVisibleGameOver: !state.isVisibleGameOver,
      };
    case GAME_MODAL_CLOSE:
      return initialState;
    default:
      return initialState;
  }
};
