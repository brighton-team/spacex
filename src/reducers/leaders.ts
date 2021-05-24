import { LeaderReducer } from 'types/actionTypes';
import {
  PUT_GAME_LEADER_DATA_REQUEST,
  PUT_GAME_LEADER_DATA_FAILURE,
  GET_GAME_LEADER_DATA_REQUEST,
  GET_GAME_LEADER_DATA_SUCCESS,
} from 'store/actionTypes';
import { LeaderActionType } from '../actions/leadersActions';

export const initialState: LeaderReducer = {
  data: null,
};

export const leadersReducer = (
  state: LeaderReducer = initialState,
  action: LeaderActionType
): LeaderReducer => {
  switch (action.type) {
    case PUT_GAME_LEADER_DATA_REQUEST:
      return {
        ...state,
      };
    case PUT_GAME_LEADER_DATA_FAILURE:
      return {
        ...state,
      };
    case GET_GAME_LEADER_DATA_REQUEST:
      return {
        ...state,
      };
    case GET_GAME_LEADER_DATA_SUCCESS:
      const data = action.payload
        .sort((a, b) => b.data.scorespacex - a.data.scorespacex)
        .slice(0, 10);
      return {
        ...state,
        data,
      };
    default:
      return state;
  }
};
