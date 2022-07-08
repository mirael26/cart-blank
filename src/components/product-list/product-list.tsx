import * as React from "react";

import { Products } from "../../types";

import Product from "../product/product";

interface ProductListProps {
  products: Products,
  setProducts: (products: Products) => void,
};

const ProductList = ({ products, setProducts }: ProductListProps): JSX.Element => {
  const deleteProduct = (deletedProductId: number) => {
    const newProducts = products.filter(product => product.id !== deletedProductId);
    setProducts(newProducts);
  }

  return (
    <div className="product-list">
      <h2 className="product-list__title">Список товаров</h2>
      {!products.length
        ? <p className="product-list__empty-message">Список пуст</p>
        : products.map((product, i) => {
          return <Product product={product} deleteProduct={deleteProduct} key={i} />
        })
      }
    </div>
  );
};

export default ProductList;