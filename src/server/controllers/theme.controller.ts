import { Request, Response } from 'express';
import db from 'db/init';

export const setTheme = async (req: Request, res: Response) => {
  const {id, themeId } = req.body;

  try {
    const theme = await db.theme.create({id, themeId});

    res.send(theme);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export const getAlltheme = async (req: Request, res: Response) => {
  try {
    const theme = await db.theme.findAll();

    res.send(theme);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
