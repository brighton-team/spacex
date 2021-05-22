import { ForumAction, ForumReducer } from 'types/actionTypes';
import {
  // CREATE_FORUM_TOPIC_REQUEST,
  CREATE_FORUM_TOPIC_SUCCESS,
  //
  // GET_FORUM_TOPICS_REQUEST,
  GET_FORUM_TOPICS_SUCCESS,
} from 'store/actionTypes';

export const initialState: ForumReducer = {
  topics: {},
};

export const forumReducer = (
  state: ForumReducer = initialState,
  action: ForumAction
): ForumReducer => {
  switch (action.type) {
    case GET_FORUM_TOPICS_SUCCESS:
      return {
        ...state,
        topics:
          Array.isArray(action.payload) &&
          action.payload.reduce((obj, item) => {
            obj[item.id] = item; // eslint-disable-line no-param-reassign
            return obj;
          }, {}),
      };
    case CREATE_FORUM_TOPIC_SUCCESS:
      if (Array.isArray(action.payload)) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        topics: {
          ...state.topics,
          [action.payload.id]: action.payload,
        },
      };
    default:
      return state;
  }
};
