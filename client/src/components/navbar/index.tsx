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
  console.log(user);
  return (
    <>
      <AppBar position="fixed" className={classes.navBar}>
        <Link to="/">
          <IconButton>
            <HomeIcon />
          </IconButton>
        </Link>
        <Avatar
          alt={user.name}
          style={{color: 'black'}}
        >
          {user.name[0]}
        </Avatar>
      </AppBar>
    </>
  )
}
