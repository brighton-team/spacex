import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

export const StyledDialog = withStyles({
  paper: {
    width: 340,
    background: 'rgba(199, 218, 255, 0.9)',
    boxShadow: '0px 0px 6px rgb(0 0 0 / 14%)',
    borderRadius: 12,
    paddingBottom: 15,
  },
})(Dialog);

export const Actions = withStyles({
  root: {
    justifyContent: 'center',
  },
})(DialogActions);

export const Title = withStyles({
  root: {
    fontFamily: 'Montserrat, sans-serif',
    textAlign: 'center',
    fontWeight: 500,
    fontSize: 15,
    lineHeight: '20px',
    color: '#221749',
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
