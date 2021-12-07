import DB from '@database';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function productById(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const db = new DB();
    const productId: TProductId = parseInt(req.query.productId as string);

    const product = await db.getProductById(productId);

    res.status(200).json(product);
  } catch (e) {
    console.error(e);

    res.status(404).end();
  }
}
