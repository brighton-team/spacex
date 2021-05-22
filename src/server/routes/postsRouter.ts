import { Router } from 'express';
import postsController from '../controllers/posts.controller';

export const postsRouter = (apiRouter: Router) => {
  const router: Router = Router();

  apiRouter.use('/forum-posts', router);

  router.get('/:topicId', postsController.getTopicPosts);
  router.post('/', postsController.create);
};
