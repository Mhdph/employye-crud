import User from "../model/user";

export async function getUsers(req: any, res: any) {
  try {
    const users = await User.find();
    if (!users) return res.status(404).json({ error: "No users found" });
    res.status(200).json({ user: "Get Request" });
  } catch (error) {
    res.staus(404).json({ error: "error while fetching data" });
  }
}
