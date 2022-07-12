import { Schema, model, connect } from "mongoose";

interface IUser {
  name: string;
  email: string;
  avatar: string;
  status: string;
  salary: number;
  date: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUser>({
  name: String,
  email: String,
  avatar: String,
  status: String,
  salary: Number,
  date: String,
});

// 3. Create a Model.
const User = model<IUser>("User", userSchema);

export default User;
