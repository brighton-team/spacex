import path from 'path';
import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import 'babel-polyfill';
import serverRenderMiddleware from './server-render-middleware';
import { cookieParser, logger } from './server/middlewares';
import { apiRouter } from './server/routes';

import db from './db/init';

// type DB = {
//   topics: any;
// };

const app = express();

app
  .use(compression())
  .use(logger)
  .use(cookieParser)
  .use(bodyParser.json())
  .use(express.static(path.resolve(__dirname, '../dist')))
  .use(express.static(path.resolve(__dirname, '../static')));

db.sync()
  .then(() => {
    console.info('Database connection established');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

app.get('/play', (req, res) => {
  res.send(
    `
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
              <div id="mount"></div>
              <script src="/main.js"></script>
          </body>
          </html>
      `
  );
});

app.use('/api', apiRouter);

app.get('/*', serverRenderMiddleware);
// app.post('/api/forum-topics', topicsController.create);

export { app };
