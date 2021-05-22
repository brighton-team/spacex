import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { ForumReducer, UserState } from 'types/actionTypes';

// eslint-disable-next-line import/no-cycle
import { createForumTopicAction, getForumTopicsAction } from '../../actions/forumActions';

import Forum from './Forum';

const mapStateToProps = (state: UserState) => {
  const {
    user: {
      data: { id },
    },
    forum: { topics },
  } = state;

  return {
    userId: id,
    forumTopics: Object.keys(topics).map((key) => topics[key]),
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<ForumReducer, void, Action>) => ({
  createForumTopic: (title: string, userId: number) => {
    dispatch(
      createForumTopicAction({
        title,
        userId,
      })
    );
  },
  getForumTopics: () => {
    dispatch(getForumTopicsAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Forum);
