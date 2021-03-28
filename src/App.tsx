import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { signIn, signUp, forum, leaders } from 'consts/routes';
import { LoginPage } from 'pages/Login';
import Forum from 'pages/Forum';
import ForumTopicView from 'pages/ForumTopicView';
import { LeadersPage } from 'pages/Leaders';
import { Header } from 'components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <Header />

      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path={signIn} component={LoginPage} />
        <Route path={signUp} component={LoginPage} />
        <Route path={forum} component={Forum} exact />
        <Route path={`${forum}/:id`} component={ForumTopicView} />
        <Route path={leaders} component={LeadersPage} />
      </Switch>
    </Router>
  );
};
export default App;
