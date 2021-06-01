import React, { useEffect } from 'react';
import { TableBody } from '@material-ui/core';
import styled from 'styled-components';

import { white } from 'consts/colors';

import { useDispatch, useSelector } from 'react-redux';
import {
  PageTitle,
  HeaderWrapper,
  StyledTableRow,
  StyledTableHead,
  StyledTable,
  StyledTableCell,
} from './styles';
import { getGameLeaderDataAction } from '../../actions/leadersActions';
import { UserState } from '../../types/actionTypes';

const HeaderWrapperStyled = styled(HeaderWrapper)`
  flex-direction: column;
`;

export const LeadersPage: React.FC = () => {
  const dispatch = useDispatch();
  const leaders = useSelector((state: UserState) => state.leaders.data);
  useEffect(() => {
    dispatch(
      getGameLeaderDataAction({
        ratingFieldName: 'scorespacex',
        cursor: 0,
        limit: 500,
      })
    );
  }, [dispatch]);
  return (
    <HeaderWrapperStyled img=''>
      <PageTitle color={white}>Лидеры</PageTitle>
      <StyledTable>
        <StyledTableHead>
          <StyledTableRow>
            <StyledTableCell>Место</StyledTableCell>
            <StyledTableCell>Имя</StyledTableCell>
            <StyledTableCell>Результат</StyledTableCell>
          </StyledTableRow>
        </StyledTableHead>
        <TableBody>
          {leaders &&
            leaders.map(({ data }, key) => (
              <StyledTableRow key={data.userName}>
                <StyledTableCell>{key + 1}</StyledTableCell>
                <StyledTableCell>{data.userName}</StyledTableCell>
                <StyledTableCell>{data.scorespacex}</StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </StyledTable>
    </HeaderWrapperStyled>
  );
};
