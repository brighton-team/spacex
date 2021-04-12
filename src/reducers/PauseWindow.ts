import { PauseWindow, IPauseWindow } from 'types/actionTypes';
import { PAUSE_WINDOW_CLOSE, PAUSE_WINDOW_OPEN } from '../store/actionTypes';

const initialState: IPauseWindow = {
  isVisible: false,
 
 
};

export const pauseWindowReducer = (
  state: IPauseWindow ,
  action: PauseWindow
): IPauseWindow => {
  const {payload,type} = action;
  switch (type) {
    case PAUSE_WINDOW_OPEN:
      return {
        ...state,
        ...payload

      };
    case PAUSE_WINDOW_CLOSE:
      return initialState;
    default:
      return initialState;
  }
};
