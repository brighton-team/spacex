import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { ForumReducer, UserState } from 'types/actionTypes';

// eslint-disable-next-line import/no-cycle
import { createForumTopicAction } from '../../actions/forumActions';

import Forum from './Forum';

const mapStateToProps = (state: UserState) => {
  const {
    user: {
      data: { id },
    },
  } = state;

  return {
    userId: id,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<ForumReducer, void, Action>) => ({
  createForumTopic: (title: string, userId: number) => {
    dispatch(
      createForumTopicAction({
        title,
        userId,
        time: new Date(),
      })
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Forum);
