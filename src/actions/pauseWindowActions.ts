import * as actionTypes from 'store/actionTypes';
import { IPauseWindow, PauseWindow } from 'types/actionTypes';

export const pauseWindowOpen = (pw: IPauseWindow): PauseWindow => {
  return {
    type: actionTypes.PAUSE_WINDOW_OPEN,
    payload: pw,
  };
};

export const pauseWindowClose = (pw: IPauseWindow): PauseWindow => {
  return {
    type: actionTypes.PAUSE_WINDOW_CLOSE,
    payload: pw,
  };
};
