import * as React from "react";
import { useState } from "react";

interface DiscountProps {
  setDiscount: (discount: number) => void,
}

let discount: number = null;

const Discount = ({ setDiscount }: DiscountProps): JSX.Element => {

  const [newDiscount, setNewDiscount] = useState(null);

  const onDiscountInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.value === '') {
      setNewDiscount(null);
      return;
    }

    if (+evt.target.value > 100) {
      setNewDiscount(100);
      return;
    }
    setNewDiscount(+evt.target.value);
  }

  const onDiscountButtonClick = (newDiscount: number) => {
    if (newDiscount === null) {
      return;
    }
    setDiscount(newDiscount);
    setNewDiscount(null);
  };

  return (
    <div className="discount">
      <h2 className="discount__title">Управление скидками</h2>
      <div className="discount__block">
        <h3 className="discount__text">Скидка (%):</h3>
        <input className="discount__input" type="number" min="0" max="100" placeholder="от 0 до 100" value={newDiscount ?? ''} onChange={onDiscountInputChange}/>

        <div className="discount__buttons">
          <button className="discount__button" onClick={() => onDiscountButtonClick(newDiscount)}>Установить скидку</button>
          <button className="discount__button" onClick={() => onDiscountButtonClick(0)}>Убрать скидки</button>
        </div>
      </div>
    </div>
  );
};

export default Discount;