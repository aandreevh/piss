import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => createStyles({

  form: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },

  inputField: {
    width: 'calc(100% - 40px)'
  },

  submitButton: {
    background: theme.palette.primary.light,
    marginTop: '30px',
    width: '30px'
  },
  item: {
    marginTop: '10px',
  }
}));
