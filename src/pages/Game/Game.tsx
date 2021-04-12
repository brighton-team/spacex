import { GameModal, openModal, closeModal } from 'components/GameModal';
import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { IGameModal } from 'types/actionTypes';

import { PageWrapper, PauseButton } from './styledItems';

const Game = (props: OwnProps): JSX.Element => {
  const openModalCallback = useCallback(openModal, []);
  const closeModalCallback = useCallback(closeModal, []);

  const { gameModal } = props;
  return (
    <PageWrapper>
      <PauseButton onClick={openModalCallback} />
      <GameModal isVisible={gameModal.isVisible} onClose={closeModalCallback} />
    </PageWrapper>
  );
};

const mapStateToProps = (state: { gameModal: IGameModal }) => ({
  state,
  gameModal: state.gameModal,
});

type OwnProps = {
  gameModal: IGameModal;
};

export default connect(mapStateToProps)(Game);
