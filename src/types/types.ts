export interface Product {
  name: string;
}
export interface Item {
  _id: string;
  authorId: string;
  categoryId: string;
  title: string;
  content: string;
  price: { $numberDecimal: string };
  imgUrls: string[];
  datePosted: string;
  likedByThisUser: boolean;
}

export interface User {
  _id: string;
  name: string;
  username: string;
  password?: string;
}