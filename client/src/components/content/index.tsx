import { Button, CircularProgress } from '@material-ui/core';
import React, {useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../model/state';
import { useStyles } from './style';
import { getQuote } from '../../redux/actions/quote-actions';
import { Alert } from '@material-ui/lab';
import NavbarComponent from '../navbar';

export default function Content() {
  const classes = useStyles();

  const {content, error} = useSelector((state: State) => state.quote);
  const loading = useSelector((state: State) => state.loadingStatus);

  const dispatch = useDispatch();
  const fetchQuote = useCallback(() => dispatch(getQuote()), []);

  return (
    <div>
      <NavbarComponent></NavbarComponent>
      <div className={classes.content}>
      <Button
        disabled={loading}
        onClick={fetchQuote}
      >
        Fetch a Quote
      </Button>
      <h1>Random quote</h1>
      {
        loading ? <CircularProgress color="secondary" /> : <>
          {error ? <span className={classes.error}>{error}</span> : '' }
          {content ? <div className={classes.item}>{content}</div> : '' }
        </>
      }
      </div>
      
    </div>
  )
}