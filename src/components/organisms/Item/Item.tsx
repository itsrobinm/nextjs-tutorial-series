"use client";
import React from "react";
import { Item } from "@/types/types";
import styles from "./Item.module.scss";
import Image from "next/image";
import { Heart } from "@/components/atom/Heart/Heart";
import { likeItem, unlikeItem } from "./actions";

const ItemComponent: React.FC<{ item: Item }> = ({ item }) => {
  const [liked, setLiked] = React.useState(item.likedByThisUser);
  return (
    <div className={styles.item}>
      <Image src={item.imgUrls[0]} alt={item.title} width={300} height={500} />
      <div className={styles.itemInfo}>
        <h2>{item.title}</h2>
        <Heart
          liked={liked}
          toggleLike={() => {
             if (!item.likedByThisUser) {
              likeItem(item._id).then(() => {
                setLiked(true);
                

              });
            } else {
              unlikeItem(item._id).then(() => {
                setLiked(false);
              });
            }
          }}
        />
      </div>
    </div>
  );
};

export default ItemComponent;
