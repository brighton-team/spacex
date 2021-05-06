import { RequestHandler } from 'express';
// eslint-disable-next-line import/no-extraneous-dependencies
import cookieParserMiddleware from 'cookie-parser';

import loggerMiddleware from './logger';

const cookieParser: RequestHandler = cookieParserMiddleware('authCookie');
const logger: RequestHandler = loggerMiddleware();

export { logger, cookieParser };
