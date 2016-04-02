import React from 'react';
import Item from './Item.jsx';

  export default ({items}) => {
    return (
      <ul>{items.map(item =>
        <li key={item.id}>
          <Item name={item.name} />
        </li>
      )}</ul>
    );
  }
