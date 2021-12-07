import enablePublicAccess from '@cors';
import DB from '@database';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function allCategories(
  req: NextApiRequest,
  res: NextApiResponse<TAPICategoryListResponse>
) {
  try {
    await enablePublicAccess(req, res);

    const db = new DB();

    const allCategories = await db.getAllCategories();
    const length = allCategories.length;

    res.json({ length, data: allCategories });
  } catch (e) {
    console.error(e);

    res
      .status(500)
      .end(
        JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
      );
  }
}
