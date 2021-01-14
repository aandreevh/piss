import { User } from './../../model/user';
import { Action, ACTIONS_ENUM } from './../../model/action';

export function LOG_IN(user: User): Action<User> {
  return {type: ACTIONS_ENUM.LOG_IN, arg: user};
}

export function LOG_OUT(user: User): Action<User> {
  return {type: ACTIONS_ENUM.LOG_IN, arg: user};
}

export function LOG_AUTH_ERROR(error: string): Action<string> {
  return {type: ACTIONS_ENUM.LOG_AUTH_ERROR, arg: error}
}
