import { ForumAction, ForumReducer } from 'types/actionTypes';
import {
  CREATE_FORUM_TOPIC_SUCCESS,
  GET_FORUM_TOPICS_SUCCESS,
  //
  GET_FORUM_TOPIC_POSTS_SUCCESS,
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
      if (!action.payload.topics) {
        return state;
      }
      return {
        ...state,
        topics: action.payload.topics.reduce((obj, item) => {
          obj[item.id] = item; // eslint-disable-line no-param-reassign
          return obj;
        }, {}),
      };

    case CREATE_FORUM_TOPIC_SUCCESS:
      if (!action.payload.topic) {
        return state;
      }
      return {
        ...state,
        topics: {
          ...state.topics,
          [action.payload.topic.id]: action.payload.topic,
        },
      };

    case GET_FORUM_TOPIC_POSTS_SUCCESS:
      if (!action.payload.posts || !action.payload.topicId) {
        return state;
      }
      return {
        ...state,
        topics: {
          ...state.topics,
          [action.payload.topicId]: {
            ...state.topics[action.payload.topicId],
            posts: action.payload.posts,
          },
        },
      };
    default:
      return state;
  }
};
