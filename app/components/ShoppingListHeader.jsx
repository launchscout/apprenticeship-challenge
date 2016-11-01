import React, { PropTypes } from 'react';
import EditableHeader from './EditableHeader';
import EditBox from './EditBox';

class ShoppingListHeader extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isAddingItem: false,
			isEditingHeader: false
		};

		this.toggleEditHeader = this.toggleEditHeader.bind(this);
		this.toggleAddItemBox = this.toggleAddItemBox.bind(this);
		this.handleAddClick = this.handleAddClick.bind(this);
		this.handleTitleUpdate = this.handleTitleUpdate.bind(this);
	}

	toggleEditHeader() {
		this.setState({
			isEditingHeader: !this.state.isEditingHeader
		});
	}

	toggleAddItemBox() {
		this.setState({
			isAddingItem: !this.state.isAddingItem
		});
	}

	handleAddClick(newItem) {
		this.props.addItem(newItem);
		this.toggleAddItemBox();
	}

	handleTitleUpdate(title) {
		console.log('From Shopping List Header: ' + title);
		this.props.editHeader(title);
		this.toggleEditHeader();
	}

	render() {
		let editForm;
		if(this.state.isAddingItem) {
			editForm = (
				<EditBox
					title="Adding Item"
					addItem={this.handleAddClick} />
			);
		}

		let header;
		if(this.state.isEditingHeader) {
			header = (
				<EditableHeader
					title={this.props.title}
					updateTitle={this.handleTitleUpdate} />
			);
		} else {
			header = <h1 onClick={this.toggleEditHeader}>{this.props.title}</h1>;
		}

		return (
			<div className="ShoppingList_Header">
				{header}
				<button onClick={this.toggleAddItemBox}>Add</button>
				{editForm}
			</div>
		);
	}
};

ShoppingListHeader.propTypes = {
	addItem: PropTypes.func.isRequired,
	editHeader: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired
};

export default ShoppingListHeader;
