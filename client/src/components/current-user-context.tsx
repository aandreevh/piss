import React, { useState, ReactNode, useEffect } from 'react';
import { CircularProgress } from '@material-ui/core';
import { User } from '../model/user';
import { useDispatch, useSelector } from 'react-redux';
import { checkCurrentUser } from '../redux/actions/user-actions';
import { State } from '../model/state';
import SocketIOClient, {Socket} from 'socket.io-client';


interface CurrentUserProviderProps {
  children: ReactNode | ReactNode[];
}

export const AuthContext = React.createContext<SocketIOClient.Socket | null>(null);
export function CurrentUserProvider({ children }: CurrentUserProviderProps) {
  const { loading, user } = useSelector((state: State) => state.currentUserState);
  const [socket, setSocketState] = useState<SocketIOClient.Socket | null>(null);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkCurrentUser());
  }, []);

  useEffect(() => {
    const ENDPOINT = "http://localhost:12345";

    const curr = SocketIOClient(ENDPOINT);
    setSocketState(curr);
  }, [user])

  return !loading ? <AuthContext.Provider value={socket}>{children}</AuthContext.Provider> : <CircularProgress/>;
}
