import { Request, Response } from 'express';
import db from 'db/init';

export const setTheme = async (req: Request, res: Response) => {
  const {userId, themeId } = req.body;

  try {
    const result = await db.userTheme.upsert({userId, themeId});

    res.send(result[0]);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export const getAlltheme = async (req: Request, res: Response) => {
  try {
    const result = await db.theme.findAll();

    res.send(result);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
