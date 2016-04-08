import React from 'react';
import Editable from './Editable.jsx';

export default ({prices, onEdit, onDelete, onValueClick}) => {
  return (
    <ul className="prices">{prices.map(price =>
      <li className="price" key={price.id}>
        <Editable
          editing={price.editing}
          value={price.amount}
          onValueClick={onValueClick.bind(null, price.id)}
          onEdit={onEdit.bind(null, price.id)}
          onDelete={onDelete.bind(null, price.id)} />
      </li>
    )}</ul>
  );
}

