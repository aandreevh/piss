import { State } from './../../model/state';
import { Action, ACTIONS_ENUM } from './../../model/action';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export const setLoadingStatusAction = (status: boolean): Action<boolean> => {
  return {
    type: ACTIONS_ENUM.SET_LOADING,
    arg: status
  };
};

export const setQuoteAction = (quote: string): Action<string> => {
  return {
    type: ACTIONS_ENUM.QUOTE_RECIEVED,
    arg: quote
  }
}

export const setQuoteError = (error: string): Action<string> => {
  return {
    type: ACTIONS_ENUM.QUOTE_FAILED,
    arg: error
  };
}

// Thunk function
export const getQuote = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  // Invoke API
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>((resolve) => {
      dispatch({ type: ACTIONS_ENUM.QUOTE_REQUESTED, arg: true});
      fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then(response => response.json())
        .then(data => {
          dispatch(setQuoteAction(data.toString()));
        })
        .catch((error: Error) => {
          dispatch(setQuoteError(error.message));
        })
        .then(() => {
          console.log("dsaadsadsdasdasadsads");
          setLoadingStatusAction(false);
          console.log('end of shit');
          resolve()
        })
    })
  }
}
