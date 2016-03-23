import React from 'react';

export default class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			clicked: false
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

	renderForm = () => {

		return (
			<div>
				<button onClick={this.deactivate}>-</button>
				<form>
	 				<input type="text" placeholder="Enter new Item" />
	 				
	 			</form>
 			</div>
		);
	};
}