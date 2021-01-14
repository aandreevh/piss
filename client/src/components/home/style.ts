import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => createStyles({

  content: {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  centeredContent: {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
  },
  
}));
