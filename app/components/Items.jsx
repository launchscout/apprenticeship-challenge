import React from 'react';
import Editable from './Editable.jsx';

export default ({items, onValueClick, onEdit}) => {
  return (
    <span className="items">{items.map(item =>
      <Editable key={item.id}
        className={item.itemType}
        editing={item.editing}
        value={item.value}
        onValueClick={onValueClick.bind(null, item.id)}
        onEdit={onEdit.bind(null, item.id)} />
    )}</span>
  );
};
