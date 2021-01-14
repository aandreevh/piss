import React, { useState, ReactNode, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { User } from '../model/user';
import { useDispatch, useSelector } from 'react-redux';
import { checkCurrentUser } from '../redux/actions/user-actions';
import { State } from '../model/state';

interface CurrentUserProviderProps {
  children: ReactNode | ReactNode[];
}

export const AuthContext = React.createContext<string | null>(null);
export function CurrentUserProvider({ children }: CurrentUserProviderProps) {
  const { loading } = useSelector((state: State) => state.currentUserState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkCurrentUser);
  }, []);

  return !loading ? <AuthContext.Provider value={'hackUser'}>{children}</AuthContext.Provider> : <CircularProgress/>;
}
