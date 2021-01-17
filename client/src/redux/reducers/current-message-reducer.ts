import { Action, ACTIONS_ENUM } from "../../model/action";
import { Message } from "../../model/message";
import { MessageState } from "../../model/state";

export default function(state: MessageState = {
  messages: [],
  error: '',
  loading: false,
} ,action: Action<Message[] | Message | string>) {
  switch(action.type) {
    case ACTIONS_ENUM.ADD_MESSAGE: 
      return {
        ...state,
        messages: state.messages.concat(action.arg as Message)
      };
    case ACTIONS_ENUM.MESSAGES_REQUESTED:
      return {
        ...state,
        loading: true
      }
    case ACTIONS_ENUM.MESSAGES_RECEIVED: 
      return {
        loading: false,
        error: '', 
        messages: state.messages.concat(action.arg as Message[])
      }
    case ACTIONS_ENUM.MESSAGES_FAILED: 
      return {
        loading: false,
        messages: [] as Message[],
        error: action.arg
      };
    default: 
      return state;
  }
}