import { Request, Response } from 'express';
import db from 'db/init';

const create = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const topic = await db.topics.create({
      title: body.title,
      userId: body.userId,
      time: new Date(),
    });

    res.send(topic);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const getAll = async (req: Request, res: Response) => {
  try {
    const topics = await db.topics.findAll({
      attributes: ['id', 'title'],
    });

    res.send(topics);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export default {
  create,
  getAll,
};
