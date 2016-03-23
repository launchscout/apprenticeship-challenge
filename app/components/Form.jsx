import React from 'react';

export default class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false,
			name: '',
			price: ''
		};
	}

	render() {

		if(this.state.clicked){
			return this.renderForm();
		}

		return this.renderButton();
		
	}

	renderButton = () => {

		return (
			<div>
				<button onClick={this.activate}>+</button>
				
 			</div>
		);
	};

	renderForm = () => {

		return (
			<div>
				<button onClick={this.deactivate}>-</button>
				<form onSubmit={this.handleSubmit}>
	 				<input type="text" placeholder="Item Name" value={this.state.name} onChange={this.handleNameChange} />
	 				<input type="text" placeholder="Item Price" value={this.state.price} onChange={this.handlePriceChange} />
	 				<input type="submit" value="Create" />
	 			</form>
 			</div>
		);
	};

	activate = () => {
		// Enter edit mode.
		this.setState({
			clicked: true
		});
	};

	deactivate = () => {
		// Enter edit mode.
		this.setState({
			clicked: false
		});
	};

	handleNameChange = (e) => {
		this.setState({name: e.target.value});
	};

	handlePriceChange = (e) => {
		this.setState({price: e.target.value});
	};

	handleSubmit = (e) => {

		e.preventDefault();
		var name = this.state.name.trim();
		var price = this.state.price.trim();
		
		if (!name || !price) {
		  return;
		}

		this.props.addItem(name, price);
		// TODO: send request to the server
		this.setState({name: '', price: ''});
	};
}