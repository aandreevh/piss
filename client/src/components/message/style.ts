import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => createStyles({

  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
  },

  myHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    width: '100%',
    justifyContent: 'flex-end',
    // padding: '5px'
    marginLeft: '10px'
  },

  icon: {
    margin: '7px'
  },
  
  message: {
    width: '100%',
    height: '120px',
    backgroundColor: '#2b2b2b',
    color: 'white'
  },
  
}));
