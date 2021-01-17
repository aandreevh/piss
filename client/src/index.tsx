import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/index';
import { ThemeProvider } from '@material-ui/core/styles';
import {Provider} from 'react-redux';
import theme from './theme';
import configureStore from './redux/store-config';
import { State } from './model/state';
import { checkCurrentUser } from './redux/actions/user-actions';

const state: State = {
  users: [],
  quote: {
    content: '',
    error: '',
    loading: false,
  },
  loadingStatus: false,
  currentUserState: {
    user: null,
    loading: true,
    error: ''
  },
  currentMessages: {
    loading: true,
    messages: [],
    error: ''
  },
  error: null
};

const store = configureStore(state);
ReactDom.render(
  <Provider store={store}>

  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </ThemeProvider>
  </Provider>
  ,
  document.getElementById('app')
  );
  