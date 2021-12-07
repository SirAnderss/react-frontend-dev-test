import DB from '@database';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function categoryById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const db = new DB();
    const categoryId: TCategoryId = parseInt(req.query.categoryId as string);

    const category = await db.getCategoryById(categoryId);

    res.status(200).json(category);
  } catch (e) {
    console.error(e);

    res.status(404).end();
  }
}
