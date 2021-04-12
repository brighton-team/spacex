import React, { useEffect } from 'react';

import { GameLogic } from './logic/GameLogic';

import { PageWrapper, Canvas } from './styledItems';

export const Game = (): JSX.Element => {
  useEffect(() => {
    const game = new GameLogic();
    game.initialize();

    return () => {
      game.deinitialize();
    };
  }, []);

  return (
    <PageWrapper>
      <Canvas id="game" />
    </PageWrapper>
  );
};
