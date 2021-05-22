import { Router } from 'express';
import topicsController from '../controllers/topics.controller';

export const topicsRouter = (apiRouter: Router) => {
  const router: Router = Router();

  apiRouter.use('/forum-topics', router);

  router.get('/get', topicsController.getAll);
  router.post('/create', topicsController.create);
};
