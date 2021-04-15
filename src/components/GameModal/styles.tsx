import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import styled from 'styled-components';
import { white } from 'consts/colors';
import { Link } from 'react-router-dom';

const StyledDialog = withStyles({
  paper: {
    width: 450,
    height: 480,
    padding: '0px 85px',
    background: 'rgba(24, 23, 67, 0.8)',
    boxShadow: '0px 0px 6px rgb(0 0 0 / 14%)',
    borderRadius: 0,
    boxSizing: 'border-box',
  },
})(Dialog);

const Actions = withStyles({
  root: {
    height: 400,
    'align-items': 'stretch',
    'flex-direction': 'column',
    'justify-content': 'space-evenly',
  },
})(DialogActions);

const Title = withStyles({
  root: {
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '24px',
    color: white,
  },
})(DialogTitle);

const StyledButton = withStyles({
  root: {
    background: 'transparent',
    height: '37px',
    width: '280px',
    color: '#221749',
    borderColor: '#221749',
    marginTop: 10,
  },
})(Button);

const StyledLink = styled(Link)`
  display: contents;
`;

export { StyledDialog, Title, Actions, StyledButton, StyledLink };
