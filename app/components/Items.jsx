import React from 'react';
import Editable from './Editable.jsx';

  export default ({items, onValueClick, onEdit, onDelete}) => {
    return (
      <ul className="items">{items.map(item =>
        <li className="item" key={item.id}>
          <Editable
            editing={item.editing}
            value={item.name}
            onValueClick={onValueClick.bind(null, item.id)}
            onEdit={onEdit.bind(null, item.id)}
            onDelete={onDelete.bind(null, item.id)}/>
        </li>
      )}</ul>
    );
  }
