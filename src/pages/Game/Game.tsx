import React from 'react';

import { PageWrapper, Canvas } from './styledItems';

import './gameLogic';

export const Game = (): JSX.Element => {
  return (
    <PageWrapper>
      <Canvas id="game" />
    </PageWrapper>
  );
};
