import React from 'react';
import { AppBar, Avatar, IconButton, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import { useStyles } from './style';
import { useSelector } from 'react-redux';
import { State } from '../../model/state';

export default function NavbarComponent() {
  const classes = useStyles();
  const user = useSelector((state: State) => state.currentUserState.user);
  return (
    <>
      <AppBar position="fixed" className={classes.navBar}>
        <Link to="/">
          <IconButton>
            <ChatIcon />
          </IconButton>
        </Link>

        <Avatar
          alt={user.name}
          style={{color: 'black'}}
        >
          {user.name[0]}
        </Avatar>

        <Link to='/content'>
          <IconButton>
            <HomeIcon />
          </IconButton>  
        </Link>
       
      </AppBar>
    </>
  )
}
