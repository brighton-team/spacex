import { Request, Response } from 'express';
import db from 'db/init';

const create = async (req: Request, res: Response) => {
  const { body } = req;

  try {
    const post = await db.posts.create({
      text: body.text,
      topicId: body.topicId,
      userId: body.userId,
      time: new Date(),
    });

    res.send(post);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

const getTopicPosts = async (req: Request, res: Response) => {
  const { params } = req;
  try {
    const posts = await db.posts.findAll({
      where: {
        topicId: params.topicId,
      },
      include: {
        model: db.users,
        attributes: ['id', 'login'],
      },
    });

    res.send(posts);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

export default {
  create,
  getTopicPosts,
};
