import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => createStyles({

  content: {
    marginTop: '50px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    height: '1500px'
  },
  messageContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(50% - 50px)',
    overflowY: 'scroll'
  },
  centeredContent: {
    width: '75%',
    display: 'flex',
    maxHeight: '1500px',
    flexDirection: 'column',
  },
  messageComponent: {
    width: '75%',
    margin: '20px'
  },
  currentUserMessage: {
    display: 'flex',
    justifyContent: 'flex-end',
    widht: '100%'
  },
  receivedMessage: {
    display: 'flex',
    widht: '100%',
    justifyContent: 'flex-start'
  }
  
}));
