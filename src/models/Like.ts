import mongoose, { Schema } from "mongoose";

export interface ILike extends Document {
  _id: string;
  userIDList: mongoose.Schema.Types.ObjectId[];
}

const likeSchema = new mongoose.Schema({
  _id: {
    type: String,
    ref: "item",
  },
  userIDList: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "user",
      //unique: true,
      required: true,
    },
  ],
});

const Like = mongoose.models.Like || mongoose.model<ILike>("Like", likeSchema);

export default Like;
