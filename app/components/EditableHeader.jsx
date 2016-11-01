import React, { PropTypes } from 'react';

class EditableHeader extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: props.title
		};

		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleTitleUpdate = this.handleTitleUpdate.bind(this);
	}

	handleTitleChange(e) {
		this.setState({ title: e.target.value });
	}

	handleTitleUpdate() {
		this.props.updateTitle(this.state.title);
	}

	render() {
		return (
			<div className="ShoppingList_EditHeader">
				<input
					type="text"
					placeholder="List Title"
					onChange={this.handleTitleChange}
					value={this.state.title} />
				<button
					className="button_add"
					onClick={this.handleTitleUpdate}>
						Update
				</button>
			</div>
		);
	}
};

EditableHeader.propTypes = {
	title: PropTypes.string.isRequired,
	updateTitle: PropTypes.func.isRequired
};

export default EditableHeader;
