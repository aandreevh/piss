import { combineReducers } from 'redux';
import users from './user-reducer';
import quote from './quote-reducer';
import loadingStatus from './loading-reducer';
import currentUserState from './current-user-reducer';
import currentMessages from './current-message-reducer';

const rootReducer = combineReducers({
  users,
  quote,
  currentMessages,
  loadingStatus,
  currentUserState
});

export default rootReducer;
