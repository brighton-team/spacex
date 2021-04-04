import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { signIn, signUp, forum, leaders, error4XX, error5XX, profile } from 'consts/routes';
import { LoginPage } from 'pages/Login';
import Forum from 'pages/Forum';
import ForumTopicView from 'pages/ForumTopicView';
import { LeadersPage } from 'pages/Leaders';
import { ErrorPage4XX, ErrorPage5XX } from 'pages/Error';
import { ProfilePage } from 'pages/Profile';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={LoginPage} exact />
        <Route path={signIn} component={LoginPage} />
        <Route path={signUp} component={LoginPage} />
        <Route path={forum} component={Forum} exact />
        <Route path={`${forum}/:id`} component={ForumTopicView} />
        <Route path={leaders} component={LeadersPage} />
        <Route path={error4XX} component={ErrorPage4XX} />
        <Route path={error5XX} component={ErrorPage5XX} />
        <Route path={profile} component={ProfilePage} />
      </Switch>
    </Router>
  );
};
export default App;
