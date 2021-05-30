import { Router } from 'express';
import postsController from '../controllers/posts.controller';
import { isAuthMiddleware } from '../middlewares/authMiddleware';

export const postsRouter = (apiRouter: Router) => {
  const router: Router = Router();

  apiRouter.use('/forum-posts', isAuthMiddleware, router);

  router.get('/:topicId', isAuthMiddleware, postsController.getTopicPosts);
  router.post('/', isAuthMiddleware, postsController.create);
};
