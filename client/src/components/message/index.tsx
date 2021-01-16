import { Avatar, Card, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../model/state';
import { useStyles } from './style';

export default function MessageComponent() {
  const classes = useStyles();
  const currentUsername = useSelector((state: State) => state.currentUserState.user.username)
  const name = 'Yavor Petkov'
  const username = 'yavorp.98@gmail.com';
  const isCurrentUser = currentUsername !== username ;
  return (
    <Card variant="outlined">
      <div className={isCurrentUser? classes.header : classes.myHeader}>
        <Avatar className={classes.icon} style={{color: 'black'}} alt={name}>{name[0]}</Avatar>
        <Typography>{name}</Typography>
      </div>
      <div className={classes.message}>

      </div>
    </Card>
  )
}