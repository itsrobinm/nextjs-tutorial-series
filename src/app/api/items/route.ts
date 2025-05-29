import { NextRequest, NextResponse } from "next/server";
import Item from "@/models/Item"; // Import the Item schema
import Like from "@/models/Like"; // Import the Like schema
import connect from "@/lib/mongodb";
import { auth } from "@/auth";

export async function POST(req: NextRequest) {
  console.log(new Date().toTimeString().split(" ")[0]); // Log the current time

  const db = await connect(); // Ensure the connection is awaited
    
  const session = await auth();
  if (!session || !session.user) {
    return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
  }


  const items = await Item.find({});
  const userId = session.user.id;

  // Fetch likes for the user
  const likes = await Like.find({ userIDList: userId });
  const likedItemIds = new Set(likes.map((like) => like._id.toString()));

  // Add 'likedByThisUser' property to each item
  const itemsWithLikes = items.map((item) => ({
    ...item.toObject(),
    likedByThisUser: likedItemIds.has(item._id.toString()),
  }));
  
  const response = NextResponse.json(itemsWithLikes, { status: 200 });

  return response;
}
