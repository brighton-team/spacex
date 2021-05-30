import { Fullscreen } from 'types/actionTypes';
import { FULLSCREEN_ON, FULLSCREEN_OFF } from 'store/actionTypes';

export const fullscreenOn = (): Fullscreen => ({
  type: FULLSCREEN_ON,
});

export const fullscreenOff = (): Fullscreen => ({
  type: FULLSCREEN_OFF,
});
