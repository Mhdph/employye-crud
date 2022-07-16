import connectMongo from "../../../database/connection";
import {
  getUser,
  deleteUser,
  postUser,
  putUser,
} from "../../../database/controller";

export default async (req: any, res: any) => {
  connectMongo().catch(() => res.status(405).json({ error: "err" }));

  const { method } = req;

  switch (method) {
    case "GET":
      getUser(req, res);
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
