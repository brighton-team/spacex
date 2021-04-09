import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import { ActionButton } from 'components/ActionButton';

import { StyledDialog, Title, Actions } from './styles';

export const PauseWindow = (props: OwnProps): JSX.Element => {
  const { isVisible, onClose, title, children, onButtonClick } = props;

  return (
    <StyledDialog open={isVisible} onClose={onClose}>
      <Title disableTypography>
        <h4>{title}</h4>
      </Title>

      <DialogContent>{children}</DialogContent>

      <Actions>
        <ActionButton onclick={onButtonClick}>Продолжить</ActionButton>
      </Actions>
    </StyledDialog>
  );
};

type OwnProps = {
  title: string;
  isVisible: boolean;
  onButtonClick?: () => void;
  onClose: () => void;
  okButtonText?: string;
  okButton?: React.ReactNode;
  children: React.ReactNode;
};

PauseWindow.defaultProps = {
  okButtonText: null,
  okButton: null,
  onButtonClick: () => {},
};
