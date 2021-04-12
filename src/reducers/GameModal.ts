import { GameModal, IGameModal } from 'types/actionTypes';
import { GAME_MODAL_CLOSE, GAME_MODAL_OPEN } from '../store/actionTypes';

const initialState: IGameModal = {
  isVisible: false,
};

export const gameModalReducer = (state: IGameModal, action: GameModal): IGameModal => {
  const { payload, type } = action;
  switch (type) {
    case GAME_MODAL_OPEN:
      return {
        ...state,
        ...payload,
      };
    case GAME_MODAL_CLOSE:
      return initialState;
    default:
      return initialState;
  }
};
