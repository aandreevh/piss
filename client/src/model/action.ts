export enum ACTIONS_ENUM {
  'CREATE_USER',
  'LOG_IN',
  'LOG_OUT',
  'LOG_AUTH_ERROR',
  'QUOTE_REQUESTED',
  'QUOTE_RECIEVED',
  'QUOTE_FAILED',
  'CURRENT_USER_REQUESTED',
  'CURRENT_USER_RECEIVED',
  'CURRENT_USER_FAILED',
  'SET_LOADING'
};

export interface Action<T> {
  type: ACTIONS_ENUM;
  arg: T;
};