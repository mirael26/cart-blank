import * as React from "react";
import { useState } from "react";

import { Product } from "../../types";

import NewProduct from "../new-product/new-product";
import ProductList from "../product-list/product-list";
import Statictics from "../statistics/statistics";
import Discount from "../discount/discount";


const App = (): JSX.Element => {
  const [products, setProducts] = useState([]);
  const [discount, setDiscount] = useState(0);

  const addNewProduct = (product: Product) => {
    const newProducts = products.slice();
    newProducts.push(product);
    console.log(newProducts);
    setProducts(newProducts);
  };

  return (
    <React.Fragment>
      <NewProduct addNewProduct={addNewProduct} />
      <ProductList products={products} setProducts={setProducts}/>
      <Statictics products={products} />
      <Discount setDiscount={setDiscount} />
    </React.Fragment>
  );
};

export default App;