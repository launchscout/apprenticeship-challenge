import React, { PropTypes } from 'react';
import EditBox from './EditBox';

class ShoppingListHeader extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditing: false
		};

		this.toggleEditForm = this.toggleEditForm.bind(this);
		this.handleAddClick = this.handleAddClick.bind(this);
	}

	toggleEditForm() {
		this.setState({
			isEditing: !this.state.isEditing
		});
	}

	handleAddClick(newItem) {
		this.props.addItem(newItem);
		this.toggleEditForm();
	}

	render() {
		let editForm;
		if(this.state.isEditing) {
			editForm = (
				<EditBox
					title="Adding Item"
					addItem={this.handleAddClick} />
			);
		}

		return (
			<div className="ShoppingList_Header">
				<h1>Shopping List</h1>
				<button onClick={this.toggleEditForm}>Add</button>
				{editForm}
			</div>
		);
	}
};

ShoppingListHeader.propTypes = {
	addItem: PropTypes.func.isRequired
};

export default ShoppingListHeader;
