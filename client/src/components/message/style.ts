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
    width: 'calc(100% - 10px)',
    justifyContent: 'flex-end',
    marginRight: '10px'
  },

  icon: {
    margin: '7px'
  },
  
  message: {
    backgroundColor: 'gray',
    color: 'white',
    padding: '10px',
    borderRadius: '90',
    lineBreak: 'strict'
  },

  myMessage: {
    backgroundColor: 'blue',
    color: 'white',
    padding: '10px',
    borderRadius: '90',
    lineBreak: 'strict'
  },

  createdAt: {
    fontStyle: 'italic',
    fontWeight: 'normal',
    fontSize: '12px',
    marginLeft: '10px'
  }
  
}));
