import React, { useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { GameModal } from 'components/GameModal';

import { GameOverModal } from 'components/GameOverModal';
import { gameOverAction, restartGame } from 'actions/gameActions';
import {
  PageWrapper,
  PauseButton,
  Canvas,
  Score,
  Health,
  FullscreenButton,
  expand,
  reduce,
  GameWrapper,
} from './styledItems';
import { UserState } from '../../types/actionTypes';
import { gameInst } from './logic/GameLogic/GameLogic';
import { toggleGameModal } from '../../actions/gameModalActions';

export const Game = (): JSX.Element => {
  const toggleFullScreen = (e: React.MouseEvent) => {
    const button = e.target as HTMLHtmlElement;
    button.blur();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      button.style.backgroundImage = `url(${reduce})`;
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      button.style.backgroundImage = `url(${expand})`;
    }
  };
  const { score, lives } = useSelector((state: UserState) => state.game);
  const userName = useSelector((state: UserState) => state.user.data.login);
  console.log('userName', userName);
  const { isVisiblePauseGame, isVisibleGameOver } = useSelector(
    (state: UserState) => state.gameModal
  );

  const ref: any = useRef();
  const dispatch = useDispatch();

  const onClose = () => {
    dispatch(gameOverAction());
    gameInst.animate();
  };

  const openModalCallback = () => {
    ref.current?.blur();
    dispatch(toggleGameModal());
    gameInst.togglePause();
  };

  const closeModalCallback = () => {
    dispatch(toggleGameModal());
    gameInst.togglePause();
    gameInst.animate();
  };

  useEffect(() => {
    gameInst.initialize(dispatch);

    return () => {
      gameInst.deinitialize();
      dispatch(restartGame());
    };
  }, [dispatch]);

  useEffect(() => {
    if (lives === 0) {
      gameInst.togglePause();
      dispatch(gameOverAction());
      // !!!!!!!!! dispatch(putGameLeaderDataAction())
    }
  }, [dispatch, lives]);

  return (
    <PageWrapper>
      <GameWrapper>
        <Canvas id="game" />
        <Score>Score: {score}</Score>
        <Health>Health: {lives}</Health>
        <PauseButton onClick={openModalCallback} ref={ref} />
        <FullscreenButton onClick={toggleFullScreen} />
        <GameModal isVisible={isVisiblePauseGame} onClose={closeModalCallback} />
        <GameOverModal isModalVisible={isVisibleGameOver} onClose={onClose} />
      </GameWrapper>
    </PageWrapper>
  );
};
