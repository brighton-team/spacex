// @ts-ignore
import { Router } from 'express';
import { setTheme, getAlltheme, getUsertheme } from '../controllers/theme.controller';

export const themeRouter = (apiRouter: Router) => {
  const router: Router = Router();

  router.post('/set', setTheme);
  router.get('/list', getAlltheme);
  router.post('/get', getUsertheme);

  apiRouter.use('/theme', router);
};
