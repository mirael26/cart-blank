import * as React from "react";
import { useState } from "react";

import { Product } from "../../types";

interface NewProductProps {
  addNewProduct: (product: Product) => void,
};

const NewProduct = ({ addNewProduct }: NewProductProps): JSX.Element => {

  const [formValue, setformValue] = useState({id: '', name: '', price: ''});
  const [isError, setError] = useState(false);

  const onFormSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    if (!formValue.id || !formValue.name || !formValue.price) {
      setError(true);
      return;
    }
    addNewProduct(
      {
        id: +formValue.id,
        name: formValue.name,
        price: +formValue.price,
      }
    );
  };

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setError(false);
    console.log(evt.target.value);
    setformValue({...formValue, [evt.target.name]: evt.target.value});
  }

  return (
    <div className="new-product">
      <h2 className="new-product__title">Добавить товар</h2>
      <form className="new-product__form"  onSubmit={onFormSubmit}>
        <input className="new-product__input new-product__input--id" type="number" name="id" placeholder="ID" value={formValue.id} onChange={onInputChange}/>
        <input className="new-product__input new-product__input--name" type="text" name="name" placeholder="Название товара" value={formValue.name} onChange={onInputChange}/>
        <input className="new-product__input new-product__input--price" type="number" name="price" placeholder="Цена" value={formValue.price} onChange={onInputChange}/>
        <button className="new-product__add-button" type="submit">Добавить</button>
      </form>
      
      {isError ? <p className="new-product__error-message">Заполните все поля!</p> : null }
    </div>
  );
};

export default NewProduct;