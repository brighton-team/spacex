import React, { useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { hot } from 'react-hot-loader/root';

import { signIn, signUp, forum, profile, leaders, game } from 'consts/routes';

import { Header } from 'components/Header';
import { LoginPage } from 'pages/Login';
import Forum from 'pages/Forum';
import ForumTopicView from 'pages/ForumTopicView';
import { LeadersPage } from 'pages/Leaders';
import { ProfilePage } from 'pages/Profile';
import { Landing } from 'pages/Landing';
import { Game } from 'pages/Game';

import { ErrorBoundary } from 'components/ErrorBoundary';
import { getUserDataAction } from '../../actions/signInActions';
import { UserState } from '../../types/actionTypes';
import { ErrorPage } from '../../pages/Error';
import { ApiServiceInstance } from 'utils/ApiService/ApiService';
import { AxiosPromise } from 'axios';
// import { Game } from '../../pages/Game';

const App: React.FC = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    const code = ApiServiceInstance.getCodefromCallback();
    if (code) {
     const response = ApiServiceInstance.postCodeOauth(code)
      .then((response) =>{if (response.data) {
        dispatch(getUserDataAction());
      }})
      .catch((err) => {
        throw err;
      });
    } else {
      dispatch(getUserDataAction());
    }
    
  }, [dispatch]);
  const { isAuth } = useSelector((state: UserState) => state.user);
  // для Valeriy или походу тут? но тоже так себе смотрится..
 
  return (
    <ErrorBoundary type="global">
      <Header />

      <Switch>
        <Route path="/" component={Landing} exact />
       
        <Route path="/?code=*"  render={() => (isAuth ? <Redirect to={leaders} /> : <LoginPage page="login" />)} />
 
        <Route
          path={leaders}
          render={() => (isAuth ? <LeadersPage /> : <Redirect to={signIn} />)}
        />
        <Route path={game} render={() => (isAuth ? <Game /> : <Redirect to={signIn} />)} />;
        <Route
          path={signIn} render={() => (isAuth ? <Redirect to={leaders} /> : <LoginPage page="login" />)}
        />
        <Route
          path={signUp}
          render={() => (isAuth ? <Redirect to={leaders} /> : <LoginPage page="register" />)}
        />
        <Route
          path={profile}
          render={() => (isAuth ? <ProfilePage /> : <Redirect to={signIn} />)}
        />
        <Route
          path={signUp}
          render={() => (isAuth ? <Redirect to={leaders} /> : <LoginPage page="register" />)}
        />
        <Route path={signUp} component={LoginPage} />
        {/* <Route path={game} component={Game} /> */}
        <Route path={forum} component={Forum} exact />
        <Route path={`${forum}/:id`} component={ForumTopicView} />
        <Route path="*">
          <ErrorPage errorNumber={404} />
        </Route>
      </Switch>
    </ErrorBoundary>
  );
};

const Component = hot(App);

export { Component as App };
