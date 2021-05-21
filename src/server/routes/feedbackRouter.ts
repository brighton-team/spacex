// @ts-ignore
import { Router } from 'express';
import { createFeedback, getAllFeedback } from '../controllers/feedback.controller';

export const feedbackRouter = (apiRouter: Router) => {
  const router: Router = Router();

  router.post('/create', createFeedback);
  router.get('/list', getAllFeedback);

  apiRouter.use('/feedback', router);
};
