import { Request, Response } from 'express';
import db from 'db/init';

export const setTheme = async (req: Request, res: Response) => {
  const { userId, themeId } = req.body;

  try {
    await db.userTheme.upsert({ userId, themeId });
    const result = await db.theme.findAll({ where: { themeId }, attributes: ['themeId', 'name'] });
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

export const getUsertheme = async (req: Request, res: Response) => {
  const { userId } = req.body;

  try {
    if (typeof userId !== 'number') {
      throw new Error('UserId must be a number');
    }
    const result = await db.query(
      'SELECT "user_themes"."themeId", "name" FROM "user_themes", "themes" WHERE "themes"."themeId"="user_themes"."themeId" AND "userId"=' +
        userId +
        ' LIMIT 1'
    );
    res.send(result[0][0]);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
