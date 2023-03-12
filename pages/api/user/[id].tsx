// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Users } from "../../../data/data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;

  if (id && req.method === "GET") {
    let user = Users.filter((item) => item.id === Number(id));
    return res.status(200).json(user);
  }
  if (req.method === "DELETE") {
    const dt = req.body;
    // let user = Users.filter((item) => item.id === Number(dt));
    return res.status(204).json("Delete");
  } else {
    return res.status(200).json("hata");
  }
}
