import mongoose, { Schema } from "mongoose";

export interface IUser extends Document {
  _id: string;
  name: string;
  username: string;
  password: string;
}

const userSchema: Schema = new mongoose.Schema({
  _id: {
    type: String, // Not necessary to specify unique
  },
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true, // Ensure usernames are unique
  },
  password: {
    type: String,
    required: true,
  },
});

const User =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);
export default User;