import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  && {
    border: 1px solid #ffffff;
    boxsizing: border-box;
    borderradius: 2px;
    color: white;
    fontweight: 700;
    padding: 4px 24px 0px 24px;
    fontsize: 16px;
    height: 33px;
  }
`;

export function ActionButton(props: OwnProps): JSX.Element {
  const { children, onclick } = props;
  return <StyledButton onClick={onclick}>{children}</StyledButton>;
}
type OwnProps = {
  children: React.ReactNode;
};
