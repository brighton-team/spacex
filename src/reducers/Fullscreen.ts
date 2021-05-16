import { Fullscreen, IFullscreen } from 'types/actionTypes';
import { FULLSCREEN_ON, FULLSCREEN_OFF } from 'store/actionTypes';

export const initialState: IFullscreen = {
  fullscreenOn: false,
};

export const fullscreenReducer = (
  state: IFullscreen = initialState,
  action: Fullscreen
): IFullscreen => {
  const { type } = action;
  switch (type) {
    case FULLSCREEN_ON:
      return {
        ...state,
        fullscreenOn: true,
      };
    case FULLSCREEN_OFF:
      return {
        ...state,
        fullscreenOn: false,
      };
    default:
      return state;
  }
};
