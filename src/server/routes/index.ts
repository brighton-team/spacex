import { Router } from 'express';
import { feedbackRouter } from './feedbackRouter';
import { usersRouter } from './usersRouter';
import { topicsRouter } from './topicsRouter';
import { postsRouter } from './postsRouter';

const apiRouter: Router = Router();

feedbackRouter(apiRouter);
usersRouter(apiRouter);
topicsRouter(apiRouter);
postsRouter(apiRouter);

export { apiRouter };
