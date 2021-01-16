import React, { ReactNode, useEffect } from 'react';
import SocketIOClient, { Socket } from 'socket.io-client';


interface SocketProviderProps {
  children: ReactNode | ReactNode[];
}

export const SocketContext = React.createContext<SocketIOClient.Socket | null>(null);

// export function SocketProvider({ children }: SocketProviderProps){
//   useEffect()
// }