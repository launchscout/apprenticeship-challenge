import React from 'react';
import Item from './Item.jsx';

export default ({items, onEdit, onDelete}) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
					<th>SKU</th>
				</tr>
			</thead>
			<tbody>{items.map(item =>
				
				<Item key={item.sku} name={item.name}  sku={item.sku} price={item.price} onDelete={onDelete.bind(null, item.sku)} />
				
			)}</tbody>
		</table>
	);
}