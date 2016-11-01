import React from 'react';
import ShoppingListHeader from './ShoppingListHeader';
import ShoppingList from './ShoppingList';

class ShoppingListApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: 'New Shopping List!',
			list: [
				{ name: 'DVD Player', price: 19.99, sku: 'ab390812bas' },
				{ name: 'Teddy Bear', price: 7.20, sku: '2b09128hafsas' },
				{ name: 'Baseball Bat', price: 12.55, sku: 'a1208savk012' },
				{ name: 'DVD', price: 29.00, sku: 'ab1028172has' },
			]
		};

		this.addItem = this.addItem.bind(this);
		this.editHeader = this.editHeader.bind(this);
		this.editItem = this.editItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	addItem({ name, sku, price }) {
		const newItem = {
			name,
			sku,
			price
		};
		const newList = this.state.list.slice();
		newList.push(newItem);

		this.setState({ list: newList });
	}

	editHeader(title) {
		console.log('Shopping List App: ' + title);
		this.setState({ title: title });
	}

	editItem({ targetSku, name, sku, price }) {
		const newList = this.state.list.map((item) => {
			if(item.sku === targetSku) {
				return Object.assign({}, item, {
					name,
					price,
					sku
				});
			} else {
				return item;
			}
		});

		this.setState({ list: newList });
	}

	deleteItem(sku) {
		const newList = this.state.list.filter((item) => item.sku !== sku);

		this.setState({ list: newList });
	}

	render() {
		return (
			<div>
				<ShoppingListHeader
					title={this.state.title}
					editHeader={this.editHeader}
					addItem={this.addItem} />
				<ShoppingList
					list={this.state.list}
					editItem={this.editItem}
					deleteItem={this.deleteItem} />
			</div>
		);
	}
}

export default ShoppingListApp;
