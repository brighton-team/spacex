import { NextFunction, Request, Response } from 'express';
import axios from 'axios';
import { GET_USER_URL } from '../../consts/routes';

export const serverUserAuthMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  if (process.env.NODE_ENV === 'development') {
    next();
    return;
  }
  const authData = {
    uuid: request.cookies.uuid,
    authCookie: request.cookies.authCookie,
  };

  response.locals.user = null;

  if (authData.authCookie && authData.uuid) {
    const cookies = Object.entries(authData)
      .map(([key, value]) => `${key}=${value}`)
      .join(';');

    try {
      const { data } = await axios.get(GET_USER_URL, {
        headers: { Cookie: cookies },
      });

      response.locals.user = data;
      response.locals.cookies = cookies;
    } catch (err) {
      response.locals.user = null;
      // eslint-disable-next-line no-console
      console.error('error', err);
    }
  }

  next();
};

const isAuthUser = (res: Response) => res.locals.user !== undefined && res.locals.user !== null;

export const isAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (process.env.NODE_ENV === 'development') {
    next();
    return;
  }
  if (isAuthUser(res)) {
    next();
  } else {
    res.status(401).send('not authorized');
  }
};
