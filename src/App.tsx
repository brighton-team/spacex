import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { signIn } from 'consts/routes';
import { LoginPage } from 'pages/Login';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path={signIn} component={LoginPage} />
      </Switch>
    </Router>
  );
};
export default App;
