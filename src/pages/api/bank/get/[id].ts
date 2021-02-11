import { connectToDatabase } from "@utils/mongodb";
import { ObjectId } from "mongodb";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextApiHandler,
) => {
  const {
    cookies,
    method,
    query: { id },
  } = req;

  if (!cookies.lpd8_auth) {
    res.status(403).send('');
    next(req, res);
  }

  if (method !== 'GET') {
    res.status(405).send('');
    next(req, res);
  }

  const { db } = await connectToDatabase();
  const [bank] = await db
    .collection('banks')
    .find({
      _id: new ObjectId(id as string),
      users_id: cookies.lpd8_auth,
    })
    .project({
      users_id: 0,
    })
    .toArray();

    res.json(bank);
};