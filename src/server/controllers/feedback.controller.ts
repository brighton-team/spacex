import { Request, Response } from 'express';
import db from 'db/init';

export const createFeedback = async (req: Request, res: Response) => {
  const { name, email, text } = req.body;

  try {
    const feedback = await db.feedback.create({ name, email, text });

    res.send(feedback);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export const getAllFeedback = async (req: Request, res: Response) => {
  try {
    const feedback = await db.feedback.findAll();

    res.send(feedback);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};
