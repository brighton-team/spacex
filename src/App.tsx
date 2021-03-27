import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { signIn, leaders } from 'consts/routes';
import { LoginPage } from 'pages/Login';
import { LeadersPage } from 'pages/Leaders';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path={signIn} component={LoginPage} />
        <Route path={leaders} component={LeadersPage} />
      </Switch>
    </Router>
  );
};
export default App;
