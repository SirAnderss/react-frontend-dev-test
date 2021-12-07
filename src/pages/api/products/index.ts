import enablePublicAccess from '@cors';
import DB from '@database';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function allProducts(
  req: NextApiRequest,
  res: NextApiResponse<TAPIProdictListResponse>
) {
  try {
    await enablePublicAccess(req, res);

    const db = new DB();

    const allProducts = await db.getAllProducts();
    const length = allProducts.length;

    res.json({ length, data: allProducts });
  } catch (e) {
    console.error(e);

    res
      .status(500)
      .end(
        JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
      );
  }
}
