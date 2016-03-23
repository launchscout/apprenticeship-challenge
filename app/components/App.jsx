import React from 'react';
import uuid from 'node-uuid';
import Items from './Items.jsx';
import Name from './Name.jsx';

export default class App extends React.Component {
  
	constructor(props) {
		super(props);

		this.state = {
			name: 'Shopping List',
			items: [
				{
					id: uuid.v4(),
					task: 'Learn Webpack'
				},
				{
					id: uuid.v4(),
					task: 'Learn React'
				},
				{
					id: uuid.v4(),
					task: 'Do laundry'
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
				<button onClick={this.addItem}>+</button>
				<Items items={items} onEdit={this.editItem} onDelete={this.deleteItem} />


			</div>
		);
	}

	addItem = () => {
		this.setState({
			notes: this.state.items.concat([{
				id: uuid.v4(),
				task: 'New task'
			}])
		});
	};

	editItem = (id, task) => {
	// Don't modify if trying set an empty value
		if(!task.trim()) {
			return;
		}

		const items = this.state.items.map(item => {
			if(item.id === id && task) {
				item.task = task;
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

	

	deleteItem = (id, e) => {
	// Avoid bubbling to edit
		e.stopPropagation();

		this.setState({
			items: this.state.items.filter(item => item.id !== id)
		});
	};

}
