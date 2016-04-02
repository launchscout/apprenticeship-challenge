import React from 'react';
import Item from './Item.jsx';

  export default ({items, onEdit, onDelete}) => {
    return (
      <ul className="items">{items.map(item =>
        <li className="item" key={item.id}>
          <Item
            name={item.name}
            onEdit={onEdit.bind(null, item.id)}
            onDelete={onDelete.bind(null, item.id)}/>
        </li>
      )}</ul>
    );
  }
