import { connectToDatabase } from "@utils/mongodb";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextApiHandler,
) => {
  const { cookies, method, headers } = req;
  if (!headers.lpd8_token) {
    res.status(403).send('');
    next(req, res);
  }

  if (method !== 'GET') {
    res.status(405).send('');
    next(req, res);
  }

  const { db } = await connectToDatabase();
  const banks = await db
    .collection("banks")
    .find({
      users_id: headers.lpd8_token,
    })
    .project({
      _id: 1,
      name: 1,
      description: 1,
    })
    .sort({ metacritic: -1 })
    .toArray();

  res.json(banks);
};