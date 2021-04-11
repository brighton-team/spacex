import React from 'react';

import { ActionButton } from 'components/ActionButton';

import { StyledDialog, Title, Actions } from './styles';

export const PauseWindow = (props: OwnProps): JSX.Element => {
  const { isVisible, onClose, title } = props;

  return (
    <StyledDialog open={isVisible} onClose={onClose}>
      <Title disableTypography>
        <h4>{title}</h4>
      </Title>
      <Actions>
        <ActionButton>Продолжить</ActionButton>
        <ActionButton>Завершить</ActionButton>
        <ActionButton>Начать заново</ActionButton>
      </Actions> 
    </StyledDialog>
  );
};

type OwnProps = {
  title: string;
  isVisible: boolean;
 
  onClose: () => void;
 
 

};

 
