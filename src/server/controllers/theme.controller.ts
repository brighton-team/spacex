import { Request, Response } from 'express';
import db from 'db/init';

export const settheme = async (req: Request, res: Response) => {
  const { name, email, text } = req.body;

  try {
    const theme = await db.theme.create({ name, email, text });

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
