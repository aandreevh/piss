import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from "react-router-dom";
import Login  from '../login/index';
import Home from '../home/index';
import NotFoundPage from '../error/index';
import Content from '../content';
import Auth from '../auth';
import { PrivateRoute } from '../../private-route';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../model/state';
import { checkCurrentUser } from '../../redux/actions/user-actions';
import { useQuery } from '../../../hooks/useQuery';
import { CurrentUserProvider } from '../current-user-context';

export default function App() {
  return (
    <>
    <CurrentUserProvider>
    <Switch>
      <PrivateRoute exact path="/auth" component={Auth} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/content" component={Content}/>
      <PrivateRoute exact path="/" component={Home} />
      <Route component={NotFoundPage} status={404} />
    </Switch>
    </CurrentUserProvider>
    </>)
}