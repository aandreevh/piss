import { createStyles, makeStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '500px'
  },

  centered: {
    display: 'flex',
    justifyContent: 'center'
  }
}));