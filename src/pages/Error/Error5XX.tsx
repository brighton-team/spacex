import React , { useState, useCallback }from 'react';
import { useHistory } from 'react-router-dom';
import { error5XXColor } from 'consts/colors';
import styled from 'styled-components';
import img from './img/5XX.png';
import {PauseWindow} from 'components/PauseWindow'

import { HeaderWrapper, TextWrapper, TextLink, ErrorNumber, Message,StyledButton } from './styles';

const HeaderWrapperBack = styled(HeaderWrapper)`
  background-image: url(${img});
`;

type ErrorNumber5XX = { number?: number | string; errorSize?: 'small' | 'large' }; // eslint-disable-line react/require-default-props

export const ErrorPage5XX: React.FC<ErrorNumber5XX> = (props: ErrorNumber5XX) => {
  const history = useHistory();
  const { number = 500, errorSize = 'large' } = props;
  const [isModalVisible, setModalVisibility] = useState(false);

  const openModal = useCallback(() => {
    setModalVisibility(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalVisibility(false);
  }, []);

  return (
    <HeaderWrapperBack>
      <TextWrapper>
        <ErrorNumber color={error5XXColor} errorSize={errorSize}>
          {number}
        </ErrorNumber>
        <Message>Мы уже фиксим</Message>
        <TextLink
          onClick={() => {
            history.goBack();
          }}
        >
          Вернуться назад
        </TextLink>
     

      
      <PauseWindow  isVisible={isModalVisible} onClose={closeModal}
 
      title="Опубликуйте сообщение">Children</PauseWindow>
           <StyledButton variant="outlined" onClick={openModal}>
          Новое сообщение
        </StyledButton>      

 

      </TextWrapper>
    </HeaderWrapperBack>
  );
};
