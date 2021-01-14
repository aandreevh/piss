import { Button, CircularProgress } from '@material-ui/core';
import React, {useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../model/state';
import { useStyles } from './style';
import { getQuote } from '../../redux/actions/quote-actions';

export default function Content() {
  const classes = useStyles();

  const {content, error} = useSelector((state: State) => state.quote);
  const loading = useSelector((state: State) => state.loadingStatus);

  const dispatch = useDispatch();
  const fetchQuote = useCallback(() => dispatch(getQuote()), []);

  return (
    <div>
      <Button
        disabled={loading}
        onClick={fetchQuote}
      >
        Fetch a Quote
      </Button>
      <h1>Content</h1>
      {
        loading ? <CircularProgress color="secondary" /> : <>
          {error ? <span className={classes.error}>{error}</span> : '' }
          {content ? <div className={classes.item}>{content}</div> : '' }
        </>
      }
    </div>
  )
}