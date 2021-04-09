import { PauseWindow, IPauseWindow } from 'types/actionTypes';
import { PAUSE_WINDOW_CLOSE, PAUSE_WINDOW_OPEN } from '../store/actionTypes';

const initialState: IPauseWindow = {
  isVisible: false,
  title: 'Окно паузы',
};

export const pauseWindowReducer = (
  state: IPauseWindow = initialState,
  action: PauseWindow
): IPauseWindow => {
  switch (action.type) {
    case PAUSE_WINDOW_OPEN:
      return {
        ...state,
        isVisible: true,
      };
    case PAUSE_WINDOW_CLOSE:
      return initialState;
    default:
      return initialState;
  }
};
