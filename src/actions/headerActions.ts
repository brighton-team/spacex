import { Header } from 'types/actionTypes';
import { TOGGLE_HEADER } from 'store/actionTypes';

export const toggleHeader = (): Header => ({
  type: TOGGLE_HEADER,
});
