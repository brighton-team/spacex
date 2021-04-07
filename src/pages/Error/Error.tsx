import React, {useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import { error5XXColor, error4XXColor } from 'consts/colors';
import styled from 'styled-components';
import img5 from './img/5XX.png';
import img4 from './img/4XX.png';

import { HeaderWrapper, TextWrapper, TextLink, ErrorNumber, Message } from './styles';

type OwnProps = { errorNumber?: 404 | 500; header?: string }; // eslint-disable-line react/require-default-props

export const ErrorPage: React.FC<OwnProps> = (props: OwnProps) => {
  const { errorNumber, header } = props;
  const errorSize = header?'small':'large';
  const is5XX = errorNumber===500;
  const img = is5XX ? img5 : img4;
  const message = is5XX ?  'Мы уже фиксим' :'Ой! Что-то пошло не так...' ;
  const color = is5XX ? error5XXColor : error4XXColor;
  const HeaderWrapperBack = styled(HeaderWrapper)`
    background-image: url(${img});
  `;
  const history = useHistory();
  const onClickHandler = useCallback(() => {history.goBack();}, []) 
  return (
    <HeaderWrapperBack>
      <TextWrapper>
        <ErrorNumber color={color} errorSize={errorSize}>
          {errorNumber} {header}
        </ErrorNumber>
        <Message>{message}</Message>
        <TextLink onClick={onClickHandler}>
          Вернуться назад
        </TextLink>
      </TextWrapper>
    </HeaderWrapperBack>
  );
};
