import { Router } from 'express';
import { feedbackRouter } from './feedbackRouter';
import { themeRouter } from './themeRouter';

const apiRouter: Router = Router();

feedbackRouter(apiRouter);
themeRouter(apiRouter);

export { apiRouter };
