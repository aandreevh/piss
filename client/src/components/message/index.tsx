import { Avatar, Card, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../model/state';
import { User } from '../../model/user';
import { useStyles } from './style';

interface Message {
  message: string;
  createdAt: string;
  user: User;
}

export default function MessageComponent(prop: Message) {
  const classes = useStyles();
  const { user, message, createdAt} = prop;
  const currentUsername = useSelector((state: State) => state.currentUserState.user.username)
  const name = user.name;
  const username = user.username;
  const isCurrentUser = currentUsername !== username ;
  return (
    <Card variant="outlined">
      <div className={classes.header}>
        <Avatar className={classes.icon} style={{color: 'black'}} alt={name}>{name[0]}</Avatar>
        <Typography>{name}</Typography>
        <Typography className={classes.createdAt}>{createdAt}</Typography>
      </div>
      <div className={isCurrentUser ? classes.message : classes.myMessage}>
        {message}
      </div>
    </Card>
  )
}