import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { StaticRouterContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import { Request, Response } from 'express';
import { App } from './components/App/App';
import { configureStore } from './store/rootstore';
import { getInitialState } from './store/getInitialState';

function getHtml(reactHtml: string, reduxState = {}) {
  return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="google-site-verification" content="nLL5VlSAgcKL756luG6o6UwKcvR8miU2duRnhU-agmE" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link
              rel="stylesheet"
              href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
            />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
              rel="stylesheet"
            />
            <link rel="shortcut icon" type="image/png" href="/images/favicon.png">
            <title>SpaceX Game</title>
            <link href="/main.css" rel="stylesheet">
        </head>
        <body>
            <div id="mount">${reactHtml}</div>
            <script>
                window.INITIAL_STATE = ${JSON.stringify(reduxState)}
            </script>
            <script src="/main.js"></script>
        </body>
        </html>
    `;
}

export default (req: Request, res: Response) => {
  const location = req.url;
  const context: StaticRouterContext = {};
  const { store } = configureStore(getInitialState(location), location);
  // const { cookies } = req.locals;
  const jsx = (
    <ReduxProvider store={store}>
      <StaticRouter context={context} location={location}>
        <App />
      </StaticRouter>
    </ReduxProvider>
  );
  const reactHtml = renderToString(jsx);
  const reduxState = store.getState();

  // if (!reduxState.user.isAuth) {
  //   res.redirect('/signIn');
  // }
  // console.log('res.headers', res.headers)

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  res.status(context.statusCode || 200).send(getHtml(reactHtml, reduxState));
};
