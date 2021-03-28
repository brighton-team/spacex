import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { signIn, signUp, leaders, profile } from 'consts/routes';
import { LoginPage } from 'pages/Login';
import { LeadersPage } from 'pages/Leaders';
import { ProfilePage } from 'pages/Profile';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path={signIn} component={LoginPage} />
        <Route path={signUp} component={LoginPage} />
        <Route path={leaders} component={LeadersPage} />
        <Route path={profile} component={ProfilePage} />
      </Switch>
    </Router>
  );
};
export default App;
