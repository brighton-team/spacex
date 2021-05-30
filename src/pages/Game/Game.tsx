import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GameModal } from 'components/GameModal';
import { GameOverModal } from 'components/GameOverModal';
import { gameOverAction, restartGame } from 'actions/gameActions';
import { fullscreenOn, fullscreenOff } from 'actions/fullscreenActions';
import { toggleGameModal } from 'actions/gameModalActions';
import { putGameLeaderDataAction } from 'actions/leadersActions';

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

export const Game = (): JSX.Element => {
  const ref: any = useRef();

  const dispatch = useDispatch();

  const toggleFullScreen = (e: React.MouseEvent) => {
    const button = e.target as HTMLHtmlElement;
    button.blur();
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      button.style.backgroundImage = `url(${reduce})`;
      dispatch(fullscreenOn());
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
      button.style.backgroundImage = `url(${expand})`;
      dispatch(fullscreenOff());
    }
  };
  const { score, lives } = useSelector((state: UserState) => state.game);
  const userName = useSelector((state: UserState) => state.user.data.login);
  const { isVisiblePauseGame, isVisibleGameOver } = useSelector(
    (state: UserState) => state.gameModal
  );

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
    gameInst.initialize(dispatch, openModalCallback);

    return () => {
      gameInst.deinitialize();
      dispatch(restartGame());
      if (document.exitFullscreen) {
        document.exitFullscreen();
        dispatch(fullscreenOff());
      }
    };
  }, [dispatch]);

  useEffect(() => {
    if (lives === 0) {
      gameInst.togglePause();
      dispatch(
        putGameLeaderDataAction({
          data: { userName, scorespacex: score },
          ratingFieldName: 'scorespacex',
        })
      );
      dispatch(gameOverAction());
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
