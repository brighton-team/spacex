import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

export const StyledButton = styled(Button)`
  && {
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 2px;
    color: white;
    font-weight: 700;
    padding: 4px 24px 0 24px;
    font-size: 16px;
    height: 33px;
  }
`;

export function ActionButton(props: OwnProps): JSX.Element {
  const { children } = props;
  return <StyledButton>{children}</StyledButton>;
}
type OwnProps = {
  children: React.ReactNode;
};
