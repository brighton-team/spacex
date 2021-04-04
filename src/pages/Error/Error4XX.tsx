import React from 'react';
import { useHistory } from 'react-router-dom';
import { error4XXColor } from 'consts/colors';
import styled from 'styled-components';
import img from './img/4XX.png';

import { HeaderWrapper, TextWrapper, TextLink, ErrorNumber, Message } from './styles';

const HeaderWrapperBack = styled(HeaderWrapper)`
  background-image: url(${img});
`;

type ErrorNumber4XX = { number: number | string };

export const ErrorPage4XX: React.FC<ErrorNumber4XX> = (props: ErrorNumber4XX) => {
  const history = useHistory();
  let { number } = props;
  number = number || 404;
  return (
    <HeaderWrapperBack>
      <TextWrapper>
        <ErrorNumber color={error4XXColor}>{number}</ErrorNumber>
        <Message>Ой! Что-то пошло не так...</Message>
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
