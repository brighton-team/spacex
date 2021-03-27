import styled from 'styled-components';
import img from './img/loginback.png';
import { white } from 'consts/colors'; 
import { Table, TableHead, TableCell, TableRow, withStyles} from '@material-ui/core';

const HeaderWrapper = styled.div`
  background: url(${img}) no-repeat center center;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  align-items: center;
`;

const PageTitle = styled.h1<{color:string }>`
  font-family: Montserrat, serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform:uppercase;
  align-self: center;
  margin-top:130px;
  margin-bottom:30px;
  color:${(props) => props.color};
`;

const StyledTable = withStyles({
  root: {
    width: '80%',
    background: 'rgba(24, 23, 67, 0.9)',
    borderRadius: '7px',
  },
  '@global': {
    'table tr:last-of-type > td': {
        borderBottom: 'none',
    }},
})(Table);

const StyledTableCell = withStyles({
  root: {
    color:white,
    fontSize:'14px',
    borderBottom: '1px solid #4D5F8F',
  },
})(TableCell);

const StyledTableHead = withStyles({
  root: {
    fontWeght:600,
    width:'100px',
  },
})(TableHead);

const StyledTableRow = withStyles({
  head: {
    height:'80px',
  },
})(TableRow);

export {
  PageTitle,
  HeaderWrapper,
  StyledTableRow,
  StyledTableHead,
  StyledTable,
  StyledTableCell
};
