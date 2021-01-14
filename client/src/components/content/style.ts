import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => createStyles({

  submitButton: {
    background: theme.palette.primary.light,
    marginTop: '30px'
  },
  item: {
    marginTop: '10px',
    fontSize: '1rem',
    color: 'green',

  },
  error: {
    color: 'red',
    fontSize: '1rem'
  }
}));