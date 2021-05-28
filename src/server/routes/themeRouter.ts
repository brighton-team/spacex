// @ts-ignore
import { Router } from 'express';
import { setTheme, getAlltheme } from '../controllers/theme.controller';

export const themeRouter = (apiRouter: Router) => {
  const router: Router = Router();

  router.post('/set', setTheme);
  router.get('/list', getAlltheme);

  apiRouter.use('/theme', router);
};
