import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { signIn, signUp, forum, leaders, game } from 'consts/routes';
import { Header } from 'components/Header';
import { LoginPage } from 'pages/Login';
import Forum from 'pages/Forum';
import ForumTopicView from 'pages/ForumTopicView';
import { LeadersPage } from 'pages/Leaders';
import Game from 'pages/Game';

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
        <Route path={game} component={Game} />
      </Switch>
    </Router>
  );
};
export default App;
