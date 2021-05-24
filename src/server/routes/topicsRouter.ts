import { Router } from 'express';
import topicsController from '../controllers/topics.controller';
import { isAuthMiddleware } from '../middlewares/authMiddleware';

export const topicsRouter = (apiRouter: Router) => {
  const router: Router = Router();

  apiRouter.use('/forum-topics', router);

  router.get('/', isAuthMiddleware, topicsController.getAll);
  router.post('/', isAuthMiddleware, topicsController.create);
};
