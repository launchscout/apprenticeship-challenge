import React, { PropTypes} from 'react';
import ShoppingItem from '../ShoppingItem/ShoppingItem';

const ShoppingList = ({ list, editItem, deleteItem }) => {
	const shoppingList = list.map((item) => (
		<li key={item.sku}>
			<ShoppingItem
				name={item.name}
				sku={item.sku}
				price={item.price}
				editItem={editItem}
				deleteItem={deleteItem}
			/>
		</li>
	));

	return (
		<div className="ShoppingList">
			<ul>
				{shoppingList}
			</ul>
		</div>
	);
};

ShoppingList.propTypes = {
	list: PropTypes.array.isRequired,
	editItem: PropTypes.func.isRequired,
	deleteItem: PropTypes.func.isRequired
};

export default ShoppingList;
