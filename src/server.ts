import path from 'path';
import express from 'express';
import compression from 'compression';
import 'babel-polyfill';
import serverRenderMiddleware from './server-render-middleware';

const app = express();

// I recommend use it only for development
// In production env you can use Nginx or CDN
app
  .use(compression())
  .use(express.static(path.resolve(__dirname, '../dist')))
  .use(express.static(path.resolve(__dirname, '../static')));

// для Valeriy Statinov. Надо что-то сделать тут?
// типа когда попадаем на этот роут, то рисуем обычно по реакту? но как рисовать обычно по реакту?))))
app.get('/play', (req, res) => {
  console.log('HHHH', req);
  console.log('HHHH', res);
  res.redirect('/profile');
});

app.get('/*', serverRenderMiddleware);

export { app };
