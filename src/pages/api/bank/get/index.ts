import { connectToDatabase } from "@utils/mongodb";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextApiHandler,
) => {
  const { cookies, method } = req;

  if (!cookies.lpd8_auth) {
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
      users_id: cookies.lpd8_auth,
    })
    .project({
      users_id: 0,
    })
    .sort({ metacritic: -1 })
    .limit(20)
    .toArray();

    res.json(banks);
};