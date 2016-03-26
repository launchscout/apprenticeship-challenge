import React from 'react';
import Item from './Item.jsx';
import Table from 'react-bootstrap/lib/Table';


export default ({items, onEdit, onDelete}) => {
	return (
		
		<Table striped bordered condensed hover>
			<thead>
				<tr>
					<th>Name</th>
					<th>Price</th>
					<th>SKU</th>
					<th>Remove</th>
				</tr>
			</thead>
			<tbody>{items.map(item =>
				
				<Item key={item.sku} name={item.name}  sku={item.sku} price={item.price} onDelete={onDelete.bind(null, item.sku)} />
				
			)}</tbody>
		</Table>
		
	);
}