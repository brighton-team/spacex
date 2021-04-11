import { pauseWindowOpen, pauseWindowClose } from 'actions/pauseWindowActions';
import { PauseWindow } from 'components/PauseWindow';
import React, { useCallback } from 'react';
import { store } from 'store';
import { connect } from 'react-redux';

import { PageWrapper, PauseButton } from './styledItems';

const Game = (props: any): JSX.Element => {
  const openModal = useCallback(() => {
    store.dispatch(pauseWindowOpen({ isVisible: true, title: '' }));
  }, []);

  const closeModal = useCallback(() => {
    store.dispatch(pauseWindowClose({ isVisible: false, title: '' }));
  }, []);

  return (
    <PageWrapper>
      <PauseButton onClick={openModal} />
      <PauseWindow
        isVisible={props.pauseWindow.isVisible}
        onClose={closeModal}
        title="Что вы хотите сделать?"
      />
    </PageWrapper>
  );
};

const mapStateToProps = (state: any): any => ({
  state,
  pauseWindow: state.pauseWindow,
});

export default connect(mapStateToProps)(Game);
