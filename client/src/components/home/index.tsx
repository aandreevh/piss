import React, { useCallback, useContext, useEffect, useState } from 'react';
import MyForm from '../form/index';
import NavbarComponent from '../navbar';
import { useStyles } from './style';
import { State } from '../../model/state';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../redux/actions/user-actions';
import { User } from '../../model/user'
import MessageComponent from '../message';
import SocketIOClient, {Socket} from 'socket.io-client';
import { Message } from '../../model/message';
import FormComponent from '../form'
import { AuthContext } from '../current-user-context';
import { fetchMessages, messageReceived } from '../../redux/actions/message-actions';
import { ACTIONS_ENUM } from '../../model/action';


export default function Home() {
  const [enabled, setEnabled] = useState(false);
  const socket = useContext(AuthContext);
  const {loading, messages} = useSelector((state: State) => state.currentMessages);
  const dispatch = useDispatch();
  const currentUser = useSelector((state: State) => state.currentUserState.user);
  const classes = useStyles();
  
  const sendMessage = (text: string) =>  { 
    dispatch(messageReceived({message: text, user: currentUser, createdAt: (new Date()).toString()}))
    socket.emit('send_message', {
    message: text,
    userId: currentUser.id
  })};

  useEffect(() => {
    dispatch(fetchMessages());
  }, [])

  useEffect(() => {
    if (!loading) {

   socket.on("successful_connection", (data: any) => {
     setEnabled(true);
    });

    socket.on('new_message', (messageObject: Message) => {
      dispatch(messageReceived(messageObject));
    });
  }
  }, [loading]);
  return (
    <>
    <NavbarComponent></NavbarComponent>
    <div className={classes.content}>
      <div className={classes.centeredContent}>
        <div className={classes.messageContainer}>
        { messages.map(m => <div className={m.user.username === currentUser.username ? classes.currentUserMessage : classes.receivedMessage}>
          <div className={classes.messageComponent}>
            <MessageComponent user={m.user} message={m.message} createdAt={m.createdAt}/>
          </div>
        </div>
          ) 
        }
        </div>
        <FormComponent onFormSubmitted={sendMessage} enabled={enabled}/>
      </div>
    </div>
   </>
  )
}
 