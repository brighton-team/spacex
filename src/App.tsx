import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { signIn, signUp, forum, game, error4XX, error5XX, profile, leaders } from 'consts/routes';

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
import { UserState } from './types/actionTypes';

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserDataAction());
  }, [dispatch]);
  const { isAuth } = useSelector((state: UserState) => state.user);

  return (
    <ErrorBoundary type="global">
      <Router>
        <Header />

        <Switch>
          <Route path="/" component={LoginPage} exact />
          <Route
            path={leaders}
            render={() => (isAuth ? <LeadersPage /> : <Redirect to={signIn} />)}
          />
          <Route
            path={signIn}
            render={() => (isAuth ? <Redirect to={leaders} /> : <LoginPage page="login" />)}
          />
          <Route path={signUp}>
            <LoginPage page="register" />
          </Route>
          <Route
            path={profile}
            render={() => (isAuth ? <ProfilePage /> : <Redirect to={signIn} />)}
          />
          <Route
            path={signUp}
            render={() => (isAuth ? <Redirect to={leaders} /> : <LoginPage page="register" />)}
          />
          <Route path={signUp} component={LoginPage} />
          <Route path={forum} component={Forum} exact />
          <Route path={`${forum}/:id`} component={ForumTopicView} />
          <Route path={game} component={Game} />
          <Route path={error4XX} component={ErrorPage4XX} />
          <Route path={error5XX} component={ErrorPage5XX} />
          <Route path="*">
            <ErrorPage4XX number={404} />
          </Route>
        </Switch>
      </Router>
    </ErrorBoundary>
  );
};
export default App;
