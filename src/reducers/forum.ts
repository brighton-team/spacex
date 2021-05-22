import { /* ForumAction, */ ForumReducer } from 'types/actionTypes';
import {
  CREATE_FORUM_TOPIC_SUCCESS,
  GET_FORUM_TOPICS_SUCCESS,
  //
  GET_FORUM_TOPIC_POSTS_SUCCESS,
} from 'store/actionTypes';

export const initialState: ForumReducer = {
  topics: {},
};

export const forumReducer = (state: ForumReducer = initialState, action: any): ForumReducer => {
  switch (action.type) {
    case GET_FORUM_TOPICS_SUCCESS:
      return {
        ...state,
        topics:
          Array.isArray(action.payload.data) &&
          action.payload.data.reduce((obj, item) => {
            obj[item.id] = item; // eslint-disable-line no-param-reassign
            return obj;
          }, {}),
      };
    case CREATE_FORUM_TOPIC_SUCCESS:
      if (Array.isArray(action.payload.data)) {
        return {
          ...state,
        };
      }
      return {
        ...state,
        topics: {
          ...state.topics,
          [action.payload.data.id]: action.payload.data,
        },
      };
    case GET_FORUM_TOPIC_POSTS_SUCCESS:
      return {
        ...state,
        topics: {
          ...state.topics,
          [action.payload.topicId]: {
            ...state.topics[action.payload.topicId],
            posts: action.payload.data,
          },
        },
      };
    default:
      return state;
  }
};
