import React, { useEffect, useCallback } from 'react';

import { GameModal, openModal, closeModal } from 'components/GameModal';
import { connect } from 'react-redux';
import { IGameModal } from 'types/actionTypes';
import { PageWrapper, PauseButton, Canvas, FullscreenButton, expand, reduce } from './styledItems';
import { GameLogic } from './logic/GameLogic';

export const GameComponent = (props: OwnProps): JSX.Element => {

 

const toggleFullScreen = (e:React.MouseEvent) => {
  const button = e.target as HTMLHtmlElement;
  button.blur();
  if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      button.style.backgroundImage = `url(${reduce})`;
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      button.style.backgroundImage = `url(${expand})`;
    }
  }
}


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
      <FullscreenButton onClick={toggleFullScreen} />
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
