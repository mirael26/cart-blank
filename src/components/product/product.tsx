import * as React from "react";

import { Product } from "../../types";

interface ProductProps {
  product: Product,
  deleteProduct: (id: number) => void
};

const Product = ({ product, deleteProduct }:ProductProps): JSX.Element => {
  return (
    <div className="product">
      <div className="product__id">{product.id}</div>
      <div className="product__name">{product.name}</div>
      <div className="product__price">{product.price} руб.</div>
      <button className="product__delete-button" onClick={() => deleteProduct(+product.id)}>Удалить</button>
    </div>
  );
};

export default Product;