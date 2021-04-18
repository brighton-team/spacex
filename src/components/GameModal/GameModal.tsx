import React from 'react';

import { ActionButton, StyledButton } from 'components/ActionButton';

import { game, leaders } from 'consts/routes';
import { useDispatch } from 'react-redux';
import { StyledDialog, Title, Actions, StyledLink } from './styles';
import { restartGame } from '../../actions/gameActions';
import { gameInst } from '../../pages/Game/logic/GameLogic/GameLogic';

export const GameModal = (props: OwnProps): JSX.Element => {
  const { isVisible, onClose, title, buttons } = props;
  const dispatch = useDispatch();
  const restart = () => {
    dispatch(restartGame());
    gameInst.restart();
  };

  return (
    <StyledDialog open={isVisible} onClose={onClose}>
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
  isVisible: boolean;
  buttons?: Record<string, string>[];

  onClose: () => void;
};

GameModal.defaultProps = {
  title: 'Что вы хотите сделать?',
  buttons: [
    { text: 'Продолжить', link: game },
    { text: 'Завершить', link: leaders },
    // { text: 'Начать заново', link: game },
  ],
};
