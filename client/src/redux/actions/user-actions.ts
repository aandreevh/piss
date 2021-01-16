import { Action, ACTIONS_ENUM } from './../../model/action';
import { User } from "../../model/user";
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import httpService from '../../service/http-service';

export const setUserLoading = (status: boolean): Action<boolean> => {
  return {
    type: ACTIONS_ENUM.CURRENT_USER_REQUESTED,
    arg: status,
  };
};

export const setCurrentUser = (user: User): Action<User> => {
  return {
    type: ACTIONS_ENUM.CURRENT_USER_RECEIVED,
    arg: user
  }
};

export const setCurrentUserError = (error: string): Action<string> => {
  return {
    type: ACTIONS_ENUM.CURRENT_USER_FAILED,
    arg: error
  };
}

// Thunk function
export const loginAction = ({code}: {code: string}): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  // Create User
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return new Promise<void>((resolve) => {
      dispatch({ type: ACTIONS_ENUM.CURRENT_USER_REQUESTED, arg: true});
      httpService.post<User>('auth/google', { code } ).
        then(user => dispatch(setCurrentUser(user)))
        .catch((error: Error) => dispatch(setCurrentUserError(error.message)))
        .finally(() => resolve());
    })
  }
}

export const checkCurrentUser = (): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    return httpService.get<User>('auth/me', {})
      .then(user => {
        return dispatch(setCurrentUser(user));
      })
      .catch((error: Error) =>  {
        return dispatch(setCurrentUserError(error.message)) })
      .then(() => console.log('dsasa'));
  }
}
