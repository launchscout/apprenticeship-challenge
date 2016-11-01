import React, { PropTypes } from 'react';

class EditBox extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: props.name,
			sku: props.sku,
			price: props.price
		};

		this.handleNameChange = this.handleNameChange.bind(this);
		this.handleSkuChange = this.handleSkuChange.bind(this);
		this.handlePriceChange = this.handlePriceChange.bind(this);
		this.handleAddClick = this.handleAddClick.bind(this);
		this.isMissingInfo = this.isMissingInfo.bind(this);
	}

	handleNameChange(e) {
		this.setState({ name: e.target.value });
	}

	handleSkuChange(e) {
		this.setState({ sku: e.target.value });
	}

	handlePriceChange(e) {
		this.setState({ price: e.target.value });
	}

	handleAddClick() {
		if(this.isMissingInfo()) {
			alert('Missing information');
			return;
		}

		const newItem = {
			name: this.state.name,
			sku: this.state.sku,
			price: Number(this.state.price)
		};

		this.props.addItem(newItem);
	}

	isMissingInfo() {
		return (!this.state.name || !this.state.sku);
	}

	render() {
		return (
			<div className="EditBox">
				<h1>{this.props.title}</h1>
				<input
					type="text"
					placeholder="Name"
					onChange={this.handleNameChange}
					value={this.state.name} />
				<input
					type="text"
					placeholder="SKU"
					onChange={this.handleSkuChange}
					value={this.state.sku} />
				<input
					type="number"
					placeholder="Price"
					onChange={this.handlePriceChange}
					value={this.state.price} />
				<button
					className="button_add"
					onClick={this.handleAddClick}>Add Item</button>
			</div>
		);
	}
};

EditBox.propTypes = {
	title: PropTypes.string.isRequired,
	addItem: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	sku: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
};

EditBox.defaultProps = {
	name: '',
	sku: '',
	price: 0
};

export default EditBox;
