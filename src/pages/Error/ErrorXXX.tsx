import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { error5XXColor, error4XXColor } from 'consts/colors';
import styled from 'styled-components';
import img5 from './img/5XX.png';
import img4 from './img/4XX.png';

import { HeaderWrapper, TextWrapper, TextLink, ErrorNumber, Message } from './styles';

type OwnProps = { number?: number | string; errorSize?: 'small' | 'large' }; // eslint-disable-line react/require-default-props

export const ErrorPageXXX: React.FC<OwnProps> = (props: OwnProps) => {
  const location = useLocation();
  const { hash } = location || '';
  const hashNumber = hash.substr(1, 3);
  const { number = 500, errorSize = 'large' } = props;
  let numberContext = hashNumber || number;
  numberContext =
    typeof numberContext === 'string' && numberContext.match(/^[0-9]+$/)
      ? parseInt(numberContext, 10)
      : numberContext;
  const is4XX = numberContext < 500;
  const img = is4XX ? img4 : img5;
  const message = is4XX ? 'Ой! Что-то пошло не так...' : 'Мы уже фиксим';
  const color = is4XX ? error4XXColor : error5XXColor;
  const HeaderWrapperBack = styled(HeaderWrapper)`
    background-image: url(${img});
  `;
  const history = useHistory();

  return (
    <HeaderWrapperBack>
      <TextWrapper>
        <ErrorNumber color={color} errorSize={errorSize}>
          {numberContext}
        </ErrorNumber>
        <Message>{message}</Message>
        <TextLink
          onClick={() => {
            history.goBack();
          }}
        >
          Вернуться назад
        </TextLink>
      </TextWrapper>
    </HeaderWrapperBack>
  );
};
