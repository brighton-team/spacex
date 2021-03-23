import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './pages/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route component={LoginPage} path="/" exact />
        <Route path="/login" component={LoginPage} exact />
      </Switch>
    </Router>
  );
};
export default App;
