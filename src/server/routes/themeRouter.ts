// @ts-ignore
import { Router } from 'express';
import { settheme, getAlltheme } from '../controllers/theme.controller';

export const themeRouter = (apiRouter: Router) => {
  const router: Router = Router();

  router.post('/set', settheme);
  router.get('/list', getAlltheme);

  apiRouter.use('/theme', router);
};
