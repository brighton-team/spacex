
import { PauseWindow, openModal, closeModal } from 'components/PauseWindow';
import React, {useCallback} from 'react';
import { connect } from 'react-redux';

import { PageWrapper, PauseButton } from './styledItems';

const Game = (props: any): JSX.Element => {

  const openModalCallback = useCallback(openModal,[]);
  const closeModalCallback = useCallback(closeModal,[]);

  return (
    <PageWrapper>
      <PauseButton onClick={openModalCallback} />
      <PauseWindow
        isVisible={props.pauseWindow.isVisible}
        onClose={closeModalCallback}
        title={props.pauseWindow.title}
      />
    </PageWrapper>
  );
};

const mapStateToProps = (state: any): any => ({
  state,
  pauseWindow: state.pauseWindow,
});

export default connect(mapStateToProps)(Game);
