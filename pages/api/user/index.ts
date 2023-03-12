// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Users } from "../../../data/data";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    return res.status(200).json(Users);
  }
  if (req.method === "POST") {
    let newUSer = req.body;
    newUSer.id = Math.floor(Math.random() * 10);
    Users.push(newUSer);
  } else {
    return res.status(400).json({ message: "invalid" });
  }
}
