import { connectToDatabase } from "@utils/mongodb";
import { ObjectId } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";

export default async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  const { db } = await connectToDatabase();
  const {
    query: { id },
  } = req;

  const movies = await db
    .collection("users")
    .findOne({_id: new ObjectId(id as string)})

    res.json(movies);
};