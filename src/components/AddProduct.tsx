"use client";

import { useState } from "react";

const AddProduct: React.FC<{addProduct: (product: string) => Promise<void>}> = ({ addProduct }) => {
  const [productName, setProductName] = useState("");
  return (
    <div>
      <input
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        placeholder="Product name"
      />
      <br />
      <button
        onClick={() => {
          addProduct(productName);
        }}
      >
        Add product
      </button>
    </div>
  );
};

export default AddProduct;
