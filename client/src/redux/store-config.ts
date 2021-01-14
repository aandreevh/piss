import { State } from './../model/state';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers'
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(initialState: State) {
  return createStore(
    rootReducer,
    {...initialState as any},
    applyMiddleware(thunkMiddleware, reduxImmutableStateInvariant())
  );
}
