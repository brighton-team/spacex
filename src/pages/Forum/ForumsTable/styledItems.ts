import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
  },
})(BaseTableCell);

export const StyledLink = styled(Link)`
  color: #fff;
  font-family: Montserrat, sans-serif;
  text-align: left;
  font-weight: 500;
  text-decoration: none;
`;

export default {
  TableCell,
  StyledLink,
};
