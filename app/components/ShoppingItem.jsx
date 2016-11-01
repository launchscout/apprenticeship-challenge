import React, { PropTypes } from 'react';
import ShoppingItemInfo from './ShoppingItemInfo';
import ShoppingItemButtons from './ShoppingItemButtons';
import EditBox from './EditBox';

class ShoppingItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditing: false
		};

		this.toggleEditForm = this.toggleEditForm.bind(this);
		this.handleEditClick = this.handleEditClick.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
	}

	toggleEditForm() {
		this.setState({
			isEditing: !this.state.isEditing
		});
	}

	handleEditClick(newItem) {
		const updatedItem = Object.assign({}, newItem, {
			targetSku: this.props.sku
		});
		this.props.editItem(updatedItem);
		this.toggleEditForm();
	}

	handleDeleteClick() {
		this.props.deleteItem(this.props.sku);
	}

	render() {
		const { name, price, sku } = this.props;

		let editForm;
		if(this.state.isEditing) {
			editForm = (
				<EditBox
					title="Updating Item"
					addItem={this.handleEditClick}
					name={name}
					price={price}
					sku={sku} />
			);
		} else {
			editForm = (
				<div>
					<ShoppingItemInfo
						name={name}
						price={price}
						sku={sku} />
					<ShoppingItemButtons
						editItem={this.toggleEditForm}
						deleteItem={this.handleDeleteClick} />
				</div>
			);
		}

		return (
			<div className="ShoppingItem">
				{editForm}
			</div>
		);
	}
}

ShoppingItem.propTypes = {
	name: PropTypes.string.isRequired,
	sku: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	editItem: PropTypes.func.isRequired,
	deleteItem: PropTypes.func.isRequired
};

export default ShoppingItem;
