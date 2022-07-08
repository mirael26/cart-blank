import * as React from "react";
import { useState } from "react";

import NewProduct from "../new-product/new-product";
import ProductList from "../product-list/product-list";
import Statictics from "../statistics/statistics";
import Discount from "../discount/discount";

const App = (): JSX.Element => {
  const [products, setProducts] = useState(null);
  const [discount, setDiscount] = useState(0);


  return (
    <React.Fragment>
      <NewProduct />
      <ProductList />
      <Statictics />
      <Discount />
    </React.Fragment>
  );
};

export default App;