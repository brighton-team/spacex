import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { signIn, forum } from 'consts/routes';
import { LoginPage } from 'pages/Login';
import Forum from 'pages/Forum';
import ForumTopicView from 'pages/ForumTopicView';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path={signIn} component={LoginPage} />
        <Route path={forum} component={Forum} exact />
        <Route path={`${forum}/:id`} component={ForumTopicView} />
      </Switch>
    </Router>
  );
};
export default App;
