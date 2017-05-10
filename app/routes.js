import { Route, IndexRoute } from 'react-router';
import React from 'react';
import App from './sub.app.js';
import Home from './containers/KiboChat/KiboChat';

const routes = (
   <Route path="/" component={App}>
    <IndexRoute component={Home} />
  </Route>

);
export default routes;
