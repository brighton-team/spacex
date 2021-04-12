
import { GameModal, openModal, closeModal } from 'components/GameModal';
import React, {useCallback} from 'react';
import { connect } from 'react-redux';

import { PageWrapper, PauseButton } from './styledItems';

const Game = (props: any): JSX.Element => {

  const openModalCallback = useCallback(openModal,[]);
  const closeModalCallback = useCallback(closeModal,[]);

  return (
    <PageWrapper>
      <PauseButton onClick={openModalCallback} />
      <GameModal
        isVisible={props.gameModal.isVisible}
        onClose={closeModalCallback}
        
      />
    </PageWrapper>
  );
};

const mapStateToProps = (state: any): any => ({
  state,
  gameModal: state.gameModal,
});

export default connect(mapStateToProps)(Game);
