import * as React from "react";

import { Product } from "../../types";

interface ProductProps {
  product: Product,
  deleteProduct: (id: number) => void,
  discount: number,
};

const Product = ({ product, deleteProduct, discount }:ProductProps): JSX.Element => {
  const discountPrice = discount ? +((product.price - (product.price * discount) / 100).toFixed(2)) : null;

  return (
    <div className="product">
      <div className="product__id">{product.id}</div>
      <div className="product__name">{product.name}</div>
      <div className={`product__price${discount ? ' product__price--crossed' : ''}`}>{product.price} руб.</div>

      {discount ? <div className="product__price">{discountPrice} руб.</div> : null}

      <button className="product__delete-button" onClick={() => deleteProduct(+product.id)}>Удалить</button>
    </div>
  );
};

export default Product;