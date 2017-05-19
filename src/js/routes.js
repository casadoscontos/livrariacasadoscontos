/* Dependencies */
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import PrimaryPage from './components/PrimaryPage';

const routes = (
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={PrimaryPage} />
    </Route>
  </Router>
);

export default routes;
