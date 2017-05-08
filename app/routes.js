import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './sub.app.js';
import Login from './containers/KiboChat/KiboChat';

const routes = (
   <Route path="/" component={App}>
    <IndexRoute component={Login} />
  </Route>

);
export default routes;
