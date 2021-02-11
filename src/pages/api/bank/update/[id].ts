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
    query: {
      id,
    },
    body,
  } = req;

  if (!cookies.lpd8_auth) {
    res.status(403).send('');
    next(req, res);
  }

  if (method !== 'PATCH') {
    res.status(405).send('');
    next(req, res);
  }

  const { db } = await connectToDatabase();
  const banks = await db
    .collection("banks")
    .updateOne({
      _id: new ObjectId(id as string),
      users_id: cookies.lpd8_auth,
    }, {
      $set: {
        ...body,
        modified: new Date(),
      }
    })

  res.json(banks);
};