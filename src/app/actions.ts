"use server";

import { products } from "@/globals/globals";
import { revalidatePath } from "next/cache";

export const addProduct = async (product: string) => {
    products.push({ name: product });
    revalidatePath("/");
};

//export const toggleItemLike = async (itemId: string) => {