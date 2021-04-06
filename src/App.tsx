import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signIn, signUp, forum, leaders, game, error4XX, error5XX, profile } from 'consts/routes';

import { Header } from 'components/Header';
import { LoginPage } from 'pages/Login';
import Forum from 'pages/Forum';
import ForumTopicView from 'pages/ForumTopicView';
import { LeadersPage } from 'pages/Leaders';
import { Game } from 'pages/Game';
import { ErrorPage4XX, ErrorPage5XX } from 'pages/Error';
import { ProfilePage } from 'pages/Profile';

import { ErrorBoundary } from 'components/ErrorBoundary';
import { getUserDataAction } from './actions/signInActions';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDataAction());
  }, [dispatch]);

  return (
    <ErrorBoundary type="global">
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
          <Route path={error4XX} component={ErrorPage4XX} />
          <Route path={error5XX} component={ErrorPage5XX} />
          <Route path={profile} component={ProfilePage} />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
};
export default App;
