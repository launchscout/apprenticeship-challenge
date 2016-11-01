import React, { PropTypes } from 'react';
import ShoppingItemInfo from '../ShoppingItemInfo/ShoppingItemInfo';
import ShoppingItemButtons from '../ShoppingItemButtons/ShoppingItemButtons';
import EditBox from '../EditBox/EditBox';
import styles from './style';

class ShoppingItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditing: false
		};

		this.toggleEditForm = this.toggleEditForm.bind(this);
		this.handleEditClick = this.handleEditClick.bind(this);
		this.handleDeleteClick = this.handleDeleteClick.bind(this);
		this.renderEditBox = this.renderEditBox.bind(this);
		this.renderShoppingItemInfo = this.renderShoppingItemInfo.bind(this);
	}

	toggleEditForm() {
		this.setState({ isEditing: !this.state.isEditing });
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

	renderEditBox() {
		const { name, price, sku } = this.props;

		return (
			<EditBox
				title="Updating Item"
				addItem={this.handleEditClick}
				name={name}
				price={price}
				sku={sku} />
		);
	}

	renderShoppingItemInfo() {
		const { name, price, sku } = this.props;

		return (
			<div style={styles.container}>
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

	render() {
		return (
			<div>
				{ this.state.isEditing ?
					this.renderEditBox() :
					this.renderShoppingItemInfo() }
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
