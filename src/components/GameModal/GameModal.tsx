import React from 'react';

import { ActionButton } from 'components/ActionButton';

import { game, leaders } from 'consts/routes';
import { StyledDialog, Title, Actions, StyledLink } from './styles';

export const GameModal = (props: OwnProps): JSX.Element => {
  const { isVisible, onClose, title, buttons } = props;

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
    { text: 'Начать заново', link: '' },
  ],
};
