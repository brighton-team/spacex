import React from 'react';
import { TableBody } from '@material-ui/core';
import styled from 'styled-components';

import { white } from 'consts/colors';

import {
  PageTitle,
  HeaderWrapper,
  StyledTableRow,
  StyledTableHead,
  StyledTable,
  StyledTableCell,
} from './styles';

const HeaderWrapperStyled = styled(HeaderWrapper)`
  flex-direction: column;
`;

/*
Request URL: https://ya-praktikum.tech/api/v2/leaderboard/all
Request Method: POST

Post Data
  cursor: 0
  limit: 10
  ratingFieldName: "sdcScore"

Example Response
  [{"data":{"id":566,"name":"ship","avatar":null,"sdcScore":28800}},{"data":{"id":6713,"name":"string007","avatar":null,"sdcScore":3400}},{"data":{"id":19632,"name":"vladimirsuragin","avatar":null,"sdcScore":1200}},{"data":{"id":5484,"name":"vova2","avatar":null,"sdcScore":800}},{"data":{"id":12,"name":"max","avatar":null,"sdcScore":666}}]
*/
type LeaderboardResponse = {
  data: {
    id: number;
    name: string;
    avatar: null;
    sdcScore: number;
  };
}[];
type TableData = {
  name: string;
  score: number;
  id: number;
}[];

const sampleRes: LeaderboardResponse = [
  { data: { id: 566, name: 'ship', avatar: null, sdcScore: 28800 } },
  { data: { id: 6713, name: 'string007', avatar: null, sdcScore: 3400 } },
  { data: { id: 19632, name: 'vladimirsuragin', avatar: null, sdcScore: 1200 } },
  { data: { id: 5484, name: 'vova2', avatar: null, sdcScore: 800 } },
  { data: { id: 12, name: 'max', avatar: null, sdcScore: 666 } },
];
function createData(res: LeaderboardResponse): TableData {
  const out: TableData = [];
  if (res.length) {
    res.map((element) =>
      out.push({ id: element.data.id, name: element.data.name, score: element.data.sdcScore })
    );
  }
  return out;
}

export const LeadersPage: React.FC = () => {
  const rows = createData(sampleRes);
  return (
    <HeaderWrapperStyled>
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
          {rows.map((row, key) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell>{key + 1}</StyledTableCell>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.score}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </HeaderWrapperStyled>
  );
};
