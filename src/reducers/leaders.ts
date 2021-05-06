import { ActionType, LeaderReducer } from 'types/actionTypes';
import {
  PUT_GAME_LEADER_DATA_REQUEST,
  PUT_GAME_LEADER_DATA_SUCCESS,
  PUT_GAME_LEADER_DATA_FAILURE,
} from 'store/actionTypes';

export const initialState: LeaderReducer = {
  data: null,
};

export const leadersReducer = (
  state: LeaderReducer = initialState,
  action: ActionType
): LeaderReducer => {
  switch (action.type) {
    case PUT_GAME_LEADER_DATA_REQUEST:
      return {
        ...state,
      };
    case PUT_GAME_LEADER_DATA_SUCCESS:
      return {
        ...state,
      };
    case PUT_GAME_LEADER_DATA_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
