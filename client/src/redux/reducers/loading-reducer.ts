import { Action, ACTIONS_ENUM } from "../../model/action";

export default function userReducer(state: boolean = false, action: Action<boolean>) {
  switch(action.type) {
    case ACTIONS_ENUM.SET_LOADING:
      return action.arg;
    default: 
      return state;
  }
}