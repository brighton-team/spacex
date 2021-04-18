import React from 'react';

import { ActionButton, StyledButton } from 'components/ActionButton';

import { game, leaders } from 'consts/routes';
import { useDispatch } from 'react-redux';
import { restartGame } from 'actions/gameActions';
import { gameInst } from 'pages/Game/logic/GameLogic/GameLogic';
import { StyledDialog, Title, Actions, StyledLink } from './styles';
import { toggleGameModal } from '../../actions/gameModalActions';

export const GameModal = (props: OwnProps): JSX.Element => {
  const { isVisible, onClose } = props;
  const dispatch = useDispatch();
  const restart = () => {
    dispatch(restartGame());
    dispatch(toggleGameModal());
    gameInst.restart();
  };

  const onExit = () => {
    dispatch(toggleGameModal());
  };

  return (
    <StyledDialog open={isVisible} onClose={onClose}>
      <Actions onClick={onClose}>
        <Title disableTypography>
          <h4>Что вы хотите сделать?</h4>
        </Title>
        <StyledLink to={game}>
          <ActionButton>Продолжить</ActionButton>
        </StyledLink>
        <StyledLink to={leaders}>
          <StyledButton onClick={onExit}>Завершить</StyledButton>
        </StyledLink>
        <StyledButton onClick={restart}>Начать заново</StyledButton>
      </Actions>
    </StyledDialog>
  );
};

type OwnProps = {
  isVisible: boolean;
  onClose: () => void;
};
