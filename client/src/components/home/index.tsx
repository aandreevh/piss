import React, { useCallback, useEffect, useState } from 'react';
import MyForm from '../form/index';
import NavbarComponent from '../navbar';
import { useStyles } from './style';
import { State } from '../../model/state';
import { useDispatch, useSelector } from 'react-redux';
import * as userActions from '../../redux/actions/user-actions';
import { User } from '../../model/user'
import MessageComponent from '../message';


export default function Home() {
  const classes = useStyles();
  const usersState = useSelector(({users}: State) => users);
  const dispatch = useDispatch();
  // const updateState = (username: string, password: string, name: string) => {
  //   console.log(username);
  //   dispatch(userActions.login({username, password, name} as User));
  // };
  return (
    <>
    <NavbarComponent key="navbar"></NavbarComponent>
    <div className={classes.content}>
      <div className={classes.centeredContent}>
        <h1>My home page</h1>
        <MessageComponent />
      </div>
    </div>
    </>
  );
}
