import React, { PropsWithChildren } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    border: '1px solid #FFFFFF',
    boxSizing: 'border-box',
    borderRadius: '2px',
    color: 'white',
    fontWeight: 700,
    padding: '5px 24px 0px 24px',
    fontSize: '16px',
    height: '33px',
  },
});

export default function ActionButton(
  props: PropsWithChildren<{ customClass: string }>
): JSX.Element {
  const classes = useStyles();
  const { customClass, children } = props;
  return <Button className={`${classes.root} ${customClass}`}>{children}</Button>;
}
