import { Action, ACTIONS_ENUM } from './../../model/action';
import { User } from "../../model/user";

export default function userReducer(state: User[] = [], action: Action<User>) {
  switch(action.type) {
    case ACTIONS_ENUM.CREATE_USER:
      return [...state, action.arg];
    default: 
      return state;
  }
}