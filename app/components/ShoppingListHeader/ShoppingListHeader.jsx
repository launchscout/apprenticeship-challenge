import React, { PropTypes } from 'react';
import EditableHeader from '../EditableHeader/EditableHeader';
import EditBox from '../EditBox/EditBox';

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
		this.getHeader = this.getHeader.bind(this);
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
		this.props.editHeader(title);
		this.toggleEditHeader();
	}

	getHeader() {
		if(this.state.isEditingHeader) {
			return (
				<EditableHeader
					title={this.props.title}
					updateTitle={this.handleTitleUpdate} />
			);
		} else {
			return (
				<h1 onClick={this.toggleEditHeader}>
					{this.props.title}
				</h1>
			);
		}
	}

	render() {
		return (
			<div className="ShoppingList_Header">
				{this.getHeader()}
				<button
					className="button_add"
					onClick={this.toggleAddItemBox}>
						Add
				</button>
				{ this.state.isAddingItem &&
				<EditBox
					title="Adding Item"
					addItem={this.handleAddClick} />}
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
