import React from 'react';
import { AppBar, IconButton, Typography } from '@material-ui/core';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import { useStyles } from './style';

export default function NavbarComponent() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.navBar}>
        <Link to="/">
          <IconButton>
            <HomeIcon />
          </IconButton>
        </Link>

        <Link to="/chat">
          <IconButton>
            <ChatIcon />
          </IconButton>
        </Link>
      </AppBar>
    </>
  )
}
