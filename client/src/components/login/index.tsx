import { Button } from '@material-ui/core';
import { current } from 'immer';
import React, { useCallback, useEffect, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { State } from '../../model/state';
import { loginAction } from '../../redux/actions/user-actions';
import httpService from '../../service/http-service';


export default function LoginComponent() {
  // redux boilerplate
  const currentUser = useSelector((state: State) => state.currentUserState.user);
  const error = useSelector((state: State) => state.currentUserState.error);
  const dispatch = useDispatch();

  const onSuccess = useCallback((res: any) => dispatch(loginAction(res)), []);
  const onFailure = useCallback((res: any) => console.log(JSON.stringify(res)), []);
  useEffect(() => {
    if(currentUser) {
      <Redirect to='home'/>
    }
  }, [currentUser])

  return (
    <div>
      <h1>Login page  </h1>
      {
        currentUser ? <Redirect to='/'/> :
        <GoogleLogin
          // extract that in my environment file
          clientId={process.env.CLIENT_ID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy="single_host_origin"
          responseType="code"
          accessType="offline"
        >
        </GoogleLogin> 
      }
      
    </div>
    
  );
}