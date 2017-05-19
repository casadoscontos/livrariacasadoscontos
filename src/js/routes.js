/* Dependencies */
import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

/* Components */
import App from './App';
import PrimaryPage from './components/PrimaryPage';

export default (
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={PrimaryPage} />
    </Route>
  </Router>
);

