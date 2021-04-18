import React from 'react';

import { ActionButton, StyledButton } from 'components/ActionButton';

import { leaders } from 'consts/routes';
import { useDispatch } from 'react-redux';
import { StyledDialog, Title, Actions, StyledLink } from '../GameModal/styles';
import { gameOverAction, restartGame } from '../../actions/gameActions';
import { gameInst } from '../../pages/Game/logic/GameLogic/GameLogic';

export const GameOverModal = (props: OwnProps): JSX.Element => {
  const { isModalVisible, onClose, title, buttons } = props;
  const dispatch = useDispatch();
  const restart = () => {
    dispatch(restartGame());
    gameInst.restart();
    gameInst.togglePause();
    gameInst.animate();
    dispatch(gameOverAction());
  };

  return (
    <StyledDialog open={isModalVisible} onClose={onClose}>
      <Actions onClick={onClose}>
        <Title disableTypography>
          <h4>{title}</h4>
        </Title>
        {buttons?.map((button) => (
          <StyledLink key={button.text} to={button.link}>
            <ActionButton>{button.text}</ActionButton>
          </StyledLink>
        ))}
        <StyledButton onClick={restart}>Начать заново</StyledButton>
      </Actions>
    </StyledDialog>
  );
};

type OwnProps = {
  title?: string;
  isModalVisible: boolean;
  buttons?: Record<string, string>[];

  onClose: () => void;
};

GameOverModal.defaultProps = {
  title: 'Game over',
  buttons: [{ text: 'Выйти', link: leaders }],
};
