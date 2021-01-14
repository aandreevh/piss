import { combineReducers } from 'redux';
import users from './user-reducer';
import quote from './quote-reducer';
import loadingStatus from './loading-reducer';
import currentUserState from './current-user-reducer';

const rootReducer = combineReducers({
  users,
  quote,
  loadingStatus,
  currentUserState
});

export default rootReducer;
