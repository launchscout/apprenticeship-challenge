import React, { PropTypes} from 'react';
import ShoppingItem from './ShoppingItem';

class ShoppingList extends React.Component {
	render() {
		const { editItem, deleteItem } = this.props;

		const shoppingList = this.props.list.map((item) => (
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
	}
}

ShoppingList.propTypes = {
	list: PropTypes.array.isRequired,
	editItem: PropTypes.func.isRequired,
	deleteItem: PropTypes.func.isRequired
};

export default ShoppingList;
