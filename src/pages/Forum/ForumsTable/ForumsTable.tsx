import React from 'react';
import { ForumTopic } from 'pages/Forum/Forum';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { TableCell, StyledLink } from './styledItems';

const ForumsTable = (props: OwnProps): JSX.Element => {
  const { forumTopics } = props;

  return (
    <Table aria-label="forums topics" data-test="forum-topics-list">
      <TableHead>
        <TableRow>
          <TableCell>НАЗВАНИЕ ТЕМЫ</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {forumTopics.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">
              <StyledLink to={`forum/${row.id}`}>{row.title}</StyledLink>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

type OwnProps = {
  forumTopics: Array<ForumTopic>;
};

export default ForumsTable;
