import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => createStyles({
  navBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between'
  },
  submitButton: {
    background: theme.palette.primary.main,
  }
}));
