import * as React from "react";

import { Products } from "../../types";

interface StatisticsProps {
  products: Products;
};

const Statictics = ({ products }: StatisticsProps): JSX.Element => {
  const amount = products.length;
  const sum = products.reduce((sum, product) => {
    return sum + product.price;
  }, 0);

  return (
    <div className="statistics">
      <h2 className="statistics__title">Статистика</h2>
      <div className="statistics__block">
        <div className="statistics__amount">
          <h3 className="statistics__subtitle">Количество товаров</h3>
          <p className="statistics__text">{amount}</p>
        </div>
        <div className="statistics__sum">
          <h3 className="statistics__subtitle">Сумма товаров</h3>
          <p className="statistics__text">{sum} руб.</p>
        </div>
      </div>
    </div>
  );
};

export default Statictics;