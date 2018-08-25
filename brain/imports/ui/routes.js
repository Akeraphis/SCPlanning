import React from 'react';
import {
  Router,
  Route,
  Switch,
  IndexRoute
} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './client/App';
import Companies from './client/administration/Companies';
import NotFoundPage from './client/NotFoundPage';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/administration" component={Companies}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </Router>
);
