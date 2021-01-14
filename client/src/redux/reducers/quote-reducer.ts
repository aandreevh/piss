import { Action, ACTIONS_ENUM } from "../../model/action";

export default function quoteReducer(state: { content: string, error: string, loading: boolean} = {content: '', error: '', loading: false} , action: Action<string>) {
  switch(action.type) {
    case ACTIONS_ENUM.QUOTE_RECIEVED:
      return {
        error: '',
        content: action.arg,
        loading: false
      };
    case ACTIONS_ENUM.QUOTE_FAILED:
      return {
        error: action.arg,
        content: '',
        loading: false
      };
    case ACTIONS_ENUM.QUOTE_REQUESTED:
      return {
        ...state,
        loading: true
      }
    default: 
      return state;
  }
}