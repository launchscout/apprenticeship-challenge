import React from 'react';
import ShoppingList from './ShoppingList';

class ShoppingListApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			list: [
				{ name: 'DVD Player', price: 19.99, sku: 'ab390812bas' },
				{ name: 'Teddy Bear', price: 7.20, sku: '2b09128hafsas' },
				{ name: 'Baseball Bat', price: 12.55, sku: 'a1208savk012' },
				{ name: 'DVD', price: 29.00, sku: 'ab1028172has' },
			]
		};

		this.editTodo = this.editTodo.bind(this);
		this.deleteTodo = this.deleteTodo.bind(this);
	}

	editTodo(sku) {
		const newList = this.state.list.map((item) => {
			if(item.sku === sku) {
				return Object.assign({}, item, {
					name: 'Hello World'
				});
			} else {
				return item;
			}
		});

		this.setState({ list: newList });
	}

	deleteTodo(sku) {
		const newList = this.state.list.filter((item) => item.sku !== sku);

		this.setState({ list: newList });
	}

	render() {
		return (
			<ShoppingList
				list={this.state.list}
				editTodo={this.editTodo}
				deleteTodo={this.deleteTodo} />
		);
	}
}

export default ShoppingListApp;
