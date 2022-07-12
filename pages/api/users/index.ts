// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import connectMongo from "../../../database/connection";
import { getUsers } from "../../../database/controller";

type Data = {
  name?: string;
  method?: string;
  error?: {};
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  connectMongo().catch(() => res.status(405).json({ error: "err" }));

  const { method } = req;

  switch (method) {
    case "GET":
      getUsers(req, res);
      break;
    case "POST":
      res.status(200).json({ method, name: "Post Request" });
      break;
    case "PUT":
      res.status(200).json({ method, name: "Put Request" });
      break;
    case "DELETE":
      res.status(200).json({ method, name: "Delete Request" });
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
