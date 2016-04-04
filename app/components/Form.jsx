import React from 'react';

export default class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			clicked: false,
			qty: '',
			prodName: '',
			price: ''
		};
	}

	render() {
		return this.renderForm();
	}

	renderForm = () => {
		return (
			<form onSubmit={this.handleSubmit}>
				<input type="text" placeholder="Qty" value={this.state.qty}
						onChange={this.qtyEdit} />
 				<input type="text" placeholder="Product"
					value={this.state.prodName} onChange={this.nameEdit} />
				<input type="text" placeholder="Price" value={this.state.price}
					onChange={this.priceEdit} />
 				<input type="submit" value="Add" />
 			</form>
		);
	};

	qtyEdit = (e) => {
		this.setState({qty: e.target.value});
	};

	nameEdit = (e) => {
		this.setState({prodName: e.target.value});
	};

	priceEdit = (e) => {
		this.setState({price: e.target.value});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		var qty = this.state.qty;
		var name = this.state.prodName;
		var price = this.state.price;
		if (!name || !price || !qty) {
		  return;
		}
		this.props.addProduct(qty, name, price);
		this.setState({qty: '', prodName: '', price: ''});
	};
}
