import { useSelector } from 'react-redux';
import React from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import { State } from './model/state';
import { CircularProgress } from '@material-ui/core';

export function PrivateRoute({ component, ...rest }: RouteProps) {
  const { user, loading } = useSelector((state: State) => state.currentUserState);
  
  const Component = component!;

  return (
    loading ? <CircularProgress />:    
    <Route
      {...rest}
      render={props =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { returnTo: props.location } }} />
        )
      }
    />
  );
}
