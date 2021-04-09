import { pauseWindowOpen,pauseWindowClose } from 'actions/pauseWindowActions';
import { PauseWindow } from 'components/PauseWindow';
import React, { useCallback, useContext } from 'react';
 
import {connect} from 'react-redux';

import { PageWrapper, PauseButton } from './styledItems';


 


const Game = (): JSX.Element => {
 
  const openModal = useCallback(() => {
    store.dispatch(pauseWindowOpen({ isVisible: true, title: '' }));
  }, []);
  
  const closeModal = useCallback(() => {
    store.dispatch(pauseWindowClose({ isVisible: false, title: '' }));
  }, []);
  
  return <PageWrapper>
    <PauseButton onClick={openModal}></PauseButton>
    <PauseWindow isVisible={this.props.pauseWindow.isVisible}
        onClose={closeModal}
        title="ПАУЗА">Children</PauseWindow>
  </PageWrapper>;
};

const mapStateToProps = (state: AllStateType): StateProps => ({
  state,
  user: state.user,  
});

export   connect(mapStateToProps)(Game);