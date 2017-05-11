import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import { configureStore } from './redux/store/store';
import routes from './routes';
import { initiateSocket } from './socketio';

import { setPhoneNumber } from './redux/actions/action';

const store = configureStore(window.__INITIAL_STATE__);
const dest = document.getElementById('content');

//store.dispatch(setPhoneNumber('+923323800399'));
store.dispatch(setPhoneNumber('+923201211991'));

initiateSocket(store);

ReactDOM.render((
  <Provider store={store}>
    <Router routes={routes} />
  </Provider>
), dest);
