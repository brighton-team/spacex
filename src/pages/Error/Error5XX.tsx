import React from 'react';
import {useHistory} from 'react-router-dom'
import {error5XXColor} from 'consts/colors';
import styled from 'styled-components';
import img from './img/5XX.png'

import {
    HeaderWrapper,
    TextWrapper,
    TextLink,
    ErrorNumber,
    Message,
} from './styles';

const HeaderWrapperBack=styled(HeaderWrapper)`
  background-image:url(${img});
`

type ErrorNumber = {number?:number}
export const ErrorPage5XX: React.FC<ErrorNumber> = (props) => {
    const history = useHistory();
    let {number} = props;
    number = number?number:500;
  return (
    <HeaderWrapperBack>
        <TextWrapper>
            <ErrorNumber color = {error5XXColor}>{number}</ErrorNumber>
            <Message>Мы уже фиксим</Message>
            <TextLink onClick={() => {history.goBack()}}>Вернуться назад</TextLink>
        </TextWrapper>
    </HeaderWrapperBack>
  );
};
