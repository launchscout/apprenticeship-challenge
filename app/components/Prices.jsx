import React from 'react';
import Price from './Price.jsx';

export default ({prices, onEdit, onDelete}) => {
  return (
    <ul className="prices">{prices.map(price =>
      <li className="price" key={price.id}>
        <Price
          amount={price.amount}
          onEdit={onEdit.bind(null, price.id)}
          onDelete={onDelete.bind(null, price.id)} />
      </li>
    )}</ul>
  );
}
