import React from 'react';
import {
  Router,
  Route,
  Switch,
  IndexRoute
} from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

import App from './client/App';
import AdministrationHome from './client/administration/AdministrationHome';
import CompaniesList from './client/administration/companies/CompaniesList';
import UsersList from './client/administration/users/UsersList';
import DataLakeHome from './client/datalake/DataLakeHome';
import NewDataTable from './client/datalake/NewDataTable';
import NotFoundPage from './client/NotFoundPage';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/administration" component={AdministrationHome}/>
      <Route exact path="/administration/companies" component={CompaniesList}/>
      <Route exact path="/administration/users" component={UsersList}/>
      <Route exact path="/dataLake" component={DataLakeHome}/>
      <Route exact path="/dataLake/newTable" component={NewDataTable}/>
      <Route component={NotFoundPage}/>
    </Switch>
  </Router>
);
