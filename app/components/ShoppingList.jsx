import React, { PropTypes} from 'react';
import ShoppingItem from './ShoppingItem';

class ShoppingList extends React.Component {
	render() {
		const { editTodo, deleteTodo } = this.props;

		const shoppingList = this.props.list.map((item) => (
			<li key={item.sku}>
				<ShoppingItem
					name={item.name}
					sku={item.sku}
					price={item.price}
					editTodo={editTodo}
					deleteTodo={deleteTodo}
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
	editTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired
};

export default ShoppingList;
