import { Router } from 'express';
import { feedbackRouter } from './feedbackRouter';

const apiRouter: Router = Router();

feedbackRouter(apiRouter);

export { apiRouter };
