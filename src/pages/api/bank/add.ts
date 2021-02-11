import { connectToDatabase } from "@utils/mongodb";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextApiHandler,
) => {
  const { cookies, method, body } = req;

  if (!cookies.lpd8_auth) {
    res.status(403).send('');
    next(req, res);
  }

  if (method !== 'POST') {
    res.status(405).send('');
    next(req, res);
  }

  const { db } = await connectToDatabase();
  const banks = await db
    .collection("banks")
    .insertOne({
      ...body,
      users_id: cookies.lpd8_auth,
      created: new Date(),
      modified: new Date(),
    })

  res.json(banks);
};