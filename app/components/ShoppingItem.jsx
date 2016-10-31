import React, { PropTypes } from 'react';
import ShoppingItemInfo from './ShoppingItemInfo';
import ShoppingItemButtons from './ShoppingItemButtons';

class ShoppingItem extends React.Component {
	constructor(props) {
		super(props);

		this.handleEditClick = this.handleEditClick.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
	}

	handleEditClick() {
		this.props.editTodo(this.props.sku);
	}

	handleDeleteClick() {
		this.props.deleteTodo(this.props.sku);
	}

	render() {
		const { name, price, sku } = this.props;

		return (
			<div className="ShoppingItem">
				<ShoppingItemInfo
					name={name}
					price={price}
					sku={sku} />
				<ShoppingItemButtons
					editTodo={this.handleEditClick}
					deleteTodo={this.handleDeleteClick} />
			</div>
		);
	}
}

ShoppingItem.propTypes = {
	name: PropTypes.string.isRequired,
	sku: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	editTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired
};

export default ShoppingItem;
