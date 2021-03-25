import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { TableCell } from './styledItems';

const forumTopics = [
  { title: 'Атака звезды смерти' },
  { title: 'Крушение Вулкана' },
  { title: 'Карибский кризис' },
];

const ForumsTable: React.FC = () => {
  return (
    <Table aria-label="forums topics">
      <TableHead>
        <TableRow>
          <TableCell>НАЗВАНИЕ ТЕМЫ</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {forumTopics.map((row) => (
          <TableRow key={row.title}>
            <TableCell component="th" scope="row">
              {row.title}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ForumsTable;
