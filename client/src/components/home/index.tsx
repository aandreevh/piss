import React, { useCallback, useEffect, useState } from 'react';
import MyForm from '../form/index';
import NavbarComponent from '../navbar';
import { useStyles } from './style';
import { State } from '../../model/state';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../redux/actions/user-actions';
import { User } from '../../model/user'
import MessageComponent from '../message';
import  { Widget } from 'react-chat-widget';
import SocketIOClient, {Socket} from 'socket.io-client';
const ENDPOINT = "http://localhost:12345";


export default function Home() {
  const [response, setResponse] = useState("");
  const [socket, setSocketState] = useState<SocketIOClient.Socket | null>(null);
  useEffect(() => {

    const curr = SocketIOClient(ENDPOINT);
    
    curr.on("successful_connection", (data: any) => {
      setResponse(data);
    });
    setSocketState(socket);

  }, []);
  console.log('qj mi huq socketio');

  
  return (


    <MessageComponent user={{username: 'Yavor', name: 'Yavkata'}} createdAt="today" message="Maikata si e ebalo" />
  )
}
