import React from 'react';
import Item from './Item.jsx';

export default ({items, onEdit, onDelete}) => {
	return (
		<ul>{items.map(item =>
			<li key={item.sku}>
				<Item name={item.name}  onDelete={onDelete.bind(null, item.sku)} />
			</li>
		)}</ul>
	);
}