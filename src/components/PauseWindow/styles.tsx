import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';
import {white} from 'consts/colors'

export const StyledDialog = withStyles({
  paper: {
    width: 450,
    height: 480,
    background: 'rgba(24, 23, 67, 0.8)',
    boxShadow: '0px 0px 6px rgb(0 0 0 / 14%)',
    borderRadius: 0,
  },
})(Dialog);

export const Actions = withStyles({
  root: {
    display: 'flex',
    'flex-direction': 'column',
    'flex-grow': 0,
    'flex-shrink': 0,
    'align-items': 'center',
  },

})(DialogActions);

export const Title = withStyles({
  root: {
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '24px',
    color: white,
  },
})(DialogTitle);

export const StyledButton = withStyles({
  root: {
    background: 'transparent',
    height: '37px',
    width: '280px',
    color: '#221749',
    borderColor: '#221749',
    marginTop: 10,
  },
})(Button);

export default {
  StyledDialog,
  Title,
  Actions,
  StyledButton,
};
