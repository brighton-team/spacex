import React from 'react';

import { StyledButton } from 'components/ActionButton';

import { leaders } from 'consts/routes';
import { useDispatch } from 'react-redux';
import { gameOverAction, restartGame } from 'actions/gameActions';
import { gameInst } from 'pages/Game/logic/GameLogic/GameLogic';
import { StyledDialog, Title, Actions, StyledLink } from '../GameModal/styles';

export const GameOverModal = (props: OwnProps): JSX.Element => {
  const { isModalVisible, onClose } = props;
  const dispatch = useDispatch();
  const restart = () => {
    dispatch(restartGame());
    dispatch(gameOverAction());
    gameInst.restart();
    gameInst.togglePause();
  };

  return (
    <StyledDialog open={isModalVisible} onClose={onClose}>
      <Actions onClick={onClose}>
        <Title disableTypography>
          <h4>Game over</h4>
        </Title>
        <StyledLink to={leaders}>
          <StyledButton onClick={restart}>Выйти</StyledButton>
        </StyledLink>
        <StyledButton onClick={restart}>Начать заново</StyledButton>
      </Actions>
    </StyledDialog>
  );
};

type OwnProps = {
  isModalVisible: boolean;
  onClose: () => void;
};
