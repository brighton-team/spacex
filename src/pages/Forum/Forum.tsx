import React from 'react';

// import { Grid, Paper } from '@material-ui/core';

import ForumsTable from './ForumsTable';

import {
  PageWrapper,
  Heading,
  TitleText,
  StyledButton,
  EmptySpace,
  TableWrapper,
} from './styledItems';

const Forum: React.FC = () => {
  return (
    <PageWrapper>
      <Heading>
        <EmptySpace />
        <TitleText>ТЕМЫ ФОРУМА</TitleText>
        <StyledButton variant="outlined">СОЗДАТЬ НОВУЮ ТЕМУ</StyledButton>
      </Heading>

      <TableWrapper>
        <ForumsTable />
      </TableWrapper>
    </PageWrapper>
  );
};

export default Forum;
