import { Router } from 'express';
import usersController from '../controllers/users.controller';
import { isAuthMiddleware } from '../middlewares/authMiddleware';

export const usersRouter = (apiRouter: Router) => {
  const router: Router = Router();

  apiRouter.use('/user', router);

  router.post('/find-or-create', isAuthMiddleware, usersController.findOrCreate);
};
