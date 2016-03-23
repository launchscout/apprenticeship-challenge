import React from 'react';
import Item from './Item.jsx';

export default ({items, onEdit, onDelete}) => {
  return (
    <ul>{items.map(item =>
      <li key={item.id}>
        <Item 
          body={item.body} 
          onEdit={onEdit.bind(null, item.id)}
          onDelete={onDelete.bind(null, item.id)}
        />
      </li>
    )}</ul>
  );
}
