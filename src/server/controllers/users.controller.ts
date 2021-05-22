import { Request, Response } from 'express';
import db from 'db/init';

const findOrCreate = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const [user] = await db.users.findOrCreate({
      where: { id: body.id },
      defaults: {
        id: body.id,
        login: body.login,
      },
    });

    res.send(user);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export default {
  findOrCreate,
};
