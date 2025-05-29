import ItemComponent from "@/components/organisms/Item/Item";
import dbConnect from "@/lib/mongodb";
import { Item } from "@/types/types";
import styles from "./home.module.scss";
import { auth } from "@/auth";

async function getItems(): Promise<Item[]> {
  // One way of doing it, but not the best way DB reads are expensive
  /*
  await dbConnect();
  const items = await Item.find({});
  console.log("Items:", items);
  return items;
  */

  //using API routes - better because it allows for caching and revalidation
  const res = await fetch("http://localhost:3000/api/items", {
    method: "POST",
    next: { revalidate: 5, tags: ["items"] },

    //cache: "no-store",
  });

  const data = (await res.json()) as Item[];
  return data;
}
export default async function Home() {
  const items = await getItems();

  const session = await auth();

  console.log("Session:", session);


  return (
    <div>
      <h1>Home</h1>
      <div className={styles.gridWrapper}>
        <div className={styles.itemGrid}>

          {items.map((item) => (
            <ItemComponent item={item} key={item._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
