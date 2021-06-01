import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { error5XXColor, error4XXColor } from 'consts/colors';
import styled from 'styled-components';
import { HeaderWrapper, TextWrapper, TextLink, ErrorNumber, Message } from './styles';
import { getThemePath } from 'consts/theme';
import { themeName } from 'reducers/selectors/userSelector';
import { useSelector } from 'react-redux';

type OwnProps = { errorNumber?: 404 | 500; header?: string }; // eslint-disable-line react/require-default-props

const getHeaderWrapperBack = (img: string) => styled(HeaderWrapper)`
  background-image: url(${img});
`;

export const ErrorPage: React.FC<OwnProps> = ({ errorNumber, header }) => {
  const errorSize = header ? 'small' : 'large';
  const is5XX = errorNumber === 500;
  const img = is5XX
    ? getThemePath(useSelector(themeName), '5XX.png')
    : getThemePath(useSelector(themeName), '4XX.png');
  const message = is5XX ? 'Мы уже фиксим' : 'Ой! Что-то пошло не так...';
  const color = is5XX ? error5XXColor : error4XXColor;
  const history = useHistory();
  const onClickHandler = useCallback(() => {
    history.goBack();
  }, [history]);
  const HeaderWrapperBack = getHeaderWrapperBack(img);

  return (
    <HeaderWrapperBack>
      <TextWrapper>
        <ErrorNumber color={color} errorSize={errorSize}>
          {errorNumber} {header}
        </ErrorNumber>
        <Message>{message}</Message>
        <TextLink onClick={onClickHandler}>Вернуться назад</TextLink>
      </TextWrapper>
    </HeaderWrapperBack>
  );
};
