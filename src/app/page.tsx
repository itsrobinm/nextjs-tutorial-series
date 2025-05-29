import AddProduct from "@/components/AddProduct";
import { products } from "@/globals/globals";
import styles from "@/styles/home.module.scss";
import { addProduct } from "./actions";
import { auth } from "@/auth";

export default async function Home() {

//let thing = await auth()
  return (
    <div className={styles.container}>
      <header>
        <h1>E-Commerce App</h1>
      </header>
      <main>
        {products.map((product, index) => (
          <p key={index}>{product.name}</p>
        ))}
        <AddProduct addProduct={addProduct} />
      </main>
    </div>
  );
}
