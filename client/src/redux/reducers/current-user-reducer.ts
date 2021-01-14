import { Action, ACTIONS_ENUM } from "../../model/action";
import { User } from "../../model/user";

export default function currentUserReducer(
  state: {
    loading: boolean;
    user: User | null;
    error: string;
  } = 
  {user: null, error: '', loading: false} , action: Action<string | User | void>) {
  switch(action.type) {
    case ACTIONS_ENUM.CURRENT_USER_REQUESTED:
      return {
        loading: true,
        user: null,
        error: '', 

      } ;
    case ACTIONS_ENUM.CURRENT_USER_RECEIVED: 
      return {
        loading: false,
        user: action.arg,
        error: ''
      }
    default: 
      return state;
  }
}