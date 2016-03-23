import React from 'react';
import uuid from 'node-uuid';
import Items from './Items.jsx';
import Name from './Name.jsx';
import Form from './Form.jsx';

export default class App extends React.Component {
  
	constructor(props) {
		super(props);

		this.state = {
			name: 'Shopping List',
			items: [
				{
					sku: uuid.v4(),
					name: 'Banana',
					price: '$1.00'
				},
				{
					sku: uuid.v4(),
					name: 'Apple',
					price: '$1.00'
				},
				{
					sku: uuid.v4(),
					name: 'Cereal',
					price: '$1.00'
				}
			]
		};
	}

	render() {

		const items = this.state.items;
		const name = this.state.name;

		console.log(items);	

		return (
			<div>
				<Name name={name} onEdit={this.editName} />
				<Form addItem={this.addItem}/>
				<Items items={items} onDelete={this.deleteItem} />


			</div>
		);
	}

	addItem = (sku, name) => {
		this.setState({
			items: this.state.items.concat([{
				sku: uuid.v4(),
				name: 'New Item',
				price: '$1.00'
			}])
		});
	};

	editItem = (sku, name) => {
	// Don't modify if trying set an empty value
		if(!name.trim()) {
			return;
		}

		const items = this.state.items.map(item => {
			if(item.sku === sku && name) {
				item.name = name;
			}

			return item;
		});

		this.setState({items});
	};

	editName = (val) => {
	// Don't modify if trying set an empty value
		if(!val.trim()) {
			return;
		}

		const name = this.state.name;
		this.setState({name: val});
	};

	

	deleteItem = (sku, e) => {
	// Avoid bubbling to edit
		e.stopPropagation();

		this.setState({
			items: this.state.items.filter(item => item.sku !== sku)
		});
	};

}
