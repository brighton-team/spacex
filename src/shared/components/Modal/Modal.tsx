import React, { FC } from 'react';
import DialogContent from '@material-ui/core/DialogContent';

import { StyledDialog, Title, Actions, StyledButton } from './styledItems';

type OwnProps = {
  title: string;
  isVisible: boolean;
  onOk: () => void;
  onClose: () => void;
  okButtonText?: string;
  okButton?: React.ReactNode;
};

type Props = FC<OwnProps>;

const Modal: Props = (props) => {
  const { isVisible, onClose, onOk, okButtonText, title, children, okButton } = props;

  return (
    <StyledDialog open={isVisible} onClose={onClose}>
      <Title disableTypography>
        <h4>{title}</h4>
      </Title>

      <DialogContent>{children}</DialogContent>

      <Actions>
        {okButton || (
          <StyledButton variant="outlined" onClick={onOk}>
            {okButtonText || 'Ok'}
          </StyledButton>
        )}
      </Actions>
    </StyledDialog>
  );
};

export default Modal;
