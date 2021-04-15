import React, { useEffect, useCallback } from 'react';

import { GameModal, openModal, closeModal } from 'components/GameModal';
import { connect } from 'react-redux';
import { IGameModal } from 'types/actionTypes';
import { PageWrapper, PauseButton, Canvas } from './styledItems';
import { GameLogic } from './logic/GameLogic';

export const GameComponent = (props: OwnProps): JSX.Element => {
  const openModalCallback = useCallback(openModal, []);
  const closeModalCallback = useCallback(closeModal, []);
  useEffect(() => {
    const game = new GameLogic();
    game.initialize();

    return () => {
      game.deinitialize();
    };
  }, []);

  const { gameModal } = props;
  return (
    <PageWrapper>
      <Canvas id="game" />
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

export const Game = connect(mapStateToProps)(GameComponent);
