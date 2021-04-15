import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { PageWrapper, Canvas, Score, Health } from './styledItems';
import { UserState } from '../../types/actionTypes';
import { gameInst } from './logic/GameLogic/GameLogic';

export const Game = (): JSX.Element => {
  const { score, lives } = useSelector((state: UserState) => state.game);
  const dispatch = useDispatch();
  useEffect(() => {
    gameInst.initialize(dispatch);

    return () => {
      gameInst.deinitialize();
    };
  }, [dispatch]);

  useEffect(() => {
    if (lives === 3) {
      gameInst.setPause();
    }
  }, [lives]);

  return (
    <PageWrapper>
      <Canvas id="game" />
      <Score>Score: {score}</Score>
      <Health>Health: {lives}</Health>
    </PageWrapper>
  );
};
