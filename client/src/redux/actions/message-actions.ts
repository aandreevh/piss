import { ThunkAction, ThunkDispatch } from "redux-thunk";
import httpService from "../../service/http-service";
import { AnyAction } from 'redux';
import { Message } from "../../model/message";
import { Action, ACTIONS_ENUM } from './../../model/action';


export const messagesReceived = (messages: Message[]): Action<Message[]> => {
  return {type: ACTIONS_ENUM.MESSAGES_RECEIVED, arg: messages}
};

export const messagesRequsted = (): Action<void> => {
  return {type: ACTIONS_ENUM.MESSAGES_REQUESTED, arg: null };
};

export const messagesFailed = (error: string): Action<string> => {
  return {type: ACTIONS_ENUM.MESSAGES_FAILED, arg: null };
}

export const messageReceived = (message: Message) => {
  return {type: ACTIONS_ENUM.ADD_MESSAGE, arg: message };
}


export const fetchMessages = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> =>  {
    dispatch(messagesRequsted);
    httpService.get<Message[]>('messages', {})
      .then(messages => dispatch(messagesReceived(messages.reverse())))
      .catch(error => dispatch(messagesFailed(error)))
      .finally(() => console.log('messages received'));
  }
}