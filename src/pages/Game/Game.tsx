import React, { useEffect, useCallback, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { GameModal, openModal, closeModal } from 'components/GameModal';

import { GameOverModal } from 'components/GameOverModal';
import { gameOverAction } from 'actions/gameActions';
import { PageWrapper, PauseButton, Canvas, Score, Health, FullscreenButton, expand, reduce } from './styledItems';
import { UserState } from '../../types/actionTypes';
import { gameInst } from './logic/GameLogic/GameLogic';

export const Game = (): JSX.Element => {
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
  const { score, lives } = useSelector((state: UserState) => state.game);
  const { isVisible, isVisibleGameOver } = useSelector((state: UserState) => state.gameModal);

  const ref: any = useRef();
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(gameOverAction());
    gameInst.animate();
  };

  const openModalCallback = useCallback(() => {
    ref.current?.blur();
    openModal();
    gameInst.togglePause();
  }, []);
  const closeModalCallback = useCallback(() => {
    closeModal();
    gameInst.togglePause();
    gameInst.animate();
  }, []);

  useEffect(() => {
    gameInst.initialize(dispatch);

    return () => {
      gameInst.deinitialize();
    };
  }, [dispatch]);

  useEffect(() => {
    if (lives === 0) {
      gameInst.togglePause();
      dispatch(gameOverAction());
    }
  }, [dispatch, lives]);

  return (
    <PageWrapper>
      <Canvas id="game" />
      <Score>Score: {score}</Score>
      <Health>Health: {lives}</Health>
      <PauseButton onClick={openModalCallback} ref={ref} />
      <FullscreenButton onClick={toggleFullScreen} />
      <GameModal isVisible={isVisible} onClose={closeModalCallback} />
      <GameOverModal isModalVisible={isVisibleGameOver} onClose={onClose} />
    </PageWrapper>
  );
};
