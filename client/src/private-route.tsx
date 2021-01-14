import { useSelector } from 'react-redux';
import React from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';
import { State } from './model/state';

export function PrivateRoute({ component, ...rest }: RouteProps) {
  const { user } = useSelector((state: State) => state.currentUserState);
  const Component = component!;

  return (
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
