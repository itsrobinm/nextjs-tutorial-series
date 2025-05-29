"use server";
import { auth } from "@/auth";
import Like from "@/models/Like";
import { revalidatePath, revalidateTag } from "next/cache";

export const likeItem = async (itemId: string) => {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error("User not authenticated");
  }

  console.log('session like: ', session);

  await Like.findOneAndUpdate(
    { _id: itemId },
    { $addToSet: { userIDList: session.user.id } },
    { upsert: true }
  );
  revalidateTag("items");
};

export const unlikeItem = async (itemId: string) => {
  const session = await auth();
  if (!session || !session.user) {
    throw new Error("User not authenticated");
  }

  console.log('session like: ', session);

  await Like.findOneAndUpdate(
    { _id: itemId },
    { $pull: { userIDList: session.user.id } },
    { new: true }
  );
  revalidateTag("items");
};
