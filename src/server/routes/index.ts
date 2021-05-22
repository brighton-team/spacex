import { Router } from 'express';
import { feedbackRouter } from './feedbackRouter';
import { usersRouter } from './usersRouter';
import { topicsRouter } from './topicsRouter';

const apiRouter: Router = Router();

feedbackRouter(apiRouter);
usersRouter(apiRouter);
topicsRouter(apiRouter);

export { apiRouter };
