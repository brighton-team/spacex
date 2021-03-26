import { TableCell as BaseTableCell, withStyles } from '@material-ui/core';

export const TableCell = withStyles({
  head: {
    fontWeight: 600,
    fontSize: 14,
    color: 'white',
    paddingLeft: 40,
  },
  body: {
    fontWeight: 400,
    fontSize: 13,
    color: 'white',
    paddingLeft: 40,
    cursor: 'pointer',
  },
})(BaseTableCell);

export default {
  TableCell,
};
