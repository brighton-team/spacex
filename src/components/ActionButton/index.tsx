import React, { PropsWithChildren } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';



const StyledButton = styled(Button)`
  border: 1px solid #FFFFFF;
  boxSizing: border-box;
  borderRadius: 2px;
  color: white;
  fontWeight: 700;
  padding: 5px 24px 0px 24px;
  fontSize: 16px;
  height: 33px;
`;

export function ActionButton(
  props: PropsWithChildren<{ customClass: string }>
): JSX.Element {
  const { customClass, children } = props;
  return <StyledButton className={`${customClass}`}>{children}</StyledButton>;
}
