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

export async function getUser(req: any, res: any) {
  try {
    const { userId } = req.query;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "No user found" });
    res.status(200).json({ user: "Get Request" });
  } catch (error) {
    res.status(404).json({ error: "error while fetching data" });
  }
}

export async function postUser(req: any, res: any) {
  try {
    const formData = req.body;
    if (formData)
      return res.status(404).json({ error: "error white fetching data" });
    User.create(formData, (err: any, data: any) => {
      return res.status(200).json(data);
    });
  } catch (error) {
    res.status(404).json({ error });
  }
}

export async function putUser(req: any, res: any) {
  try {
    const { userId } = req.query;
    const formData = req.body;

    if (userId && formData) {
      const user = await User.findByIdAndUpdate(userId, formData);
      res.status(200).json(user);
    }
    res.status(404).json({ error: "User Not Found" });
  } catch (error) {
    res.status(404).json({ error });
  }
}

export async function deleteUser(req: any, res: any) {
  try {
    const { userId } = req.query;
    if (userId) {
      const user = await User.findByIdAndDelete(userId);
      res.status(200).json(user);
    }
    res.status(404).json({ error: "User Not Found" });
  } catch (error) {
    res.status(404).json({ error });
  }
}
