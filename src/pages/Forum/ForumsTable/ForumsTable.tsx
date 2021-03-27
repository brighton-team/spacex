import React from 'react';
import { useHistory } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { TableCell } from './styledItems';

const forumTopics = [
  { id: 1, title: 'Атака звезды смерти' },
  { id: 2, title: 'Крушение Вулкана' },
  { id: 3, title: 'Карибский кризис' },
];

const ForumsTable: React.FC = () => {
  const history = useHistory();

  const goToTopic = (id: number) => () => {
    history.push(`forum/${id}`);
  };

  return (
    <Table aria-label="forums topics">
      <TableHead>
        <TableRow>
          <TableCell>НАЗВАНИЕ ТЕМЫ</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {forumTopics.map((row) => (
          <TableRow key={row.title} onClick={goToTopic(row.id)}>
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
