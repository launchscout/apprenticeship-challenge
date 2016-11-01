import React from 'react';
import ShoppingListHeader from '../ShoppingListHeader/ShoppingListHeader';
import ShoppingList from '../ShoppingList/ShoppingList';
import Storage from '../../utility/storage';

class ShoppingListApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: 'Shopping List',
			list: []
		};

		this.updateStorage = this.updateStorage.bind(this);
		this.addItem = this.addItem.bind(this);
		this.editHeader = this.editHeader.bind(this);
		this.editItem = this.editItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	componentDidMount() {
		const data = Storage.get();
		this.setState({
			list: data.list,
			title: data.title
		});
	}

	updateStorage() {
		Storage.save({
			list: this.state.list,
			title: this.state.title
		});
	}

	addItem({ name, sku, price }) {
		const newItem = {
			name,
			sku,
			price
		};
		const newList = this.state.list.slice();
		newList.push(newItem);

		this.setState({ list: newList }, this.updateStorage);
	}

	editHeader(title) {
		this.setState({ title: title }, this.updateStorage);
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

		this.setState({ list: newList }, this.updateStorage);
	}

	deleteItem(sku) {
		const newList = this.state.list.filter((item) => item.sku !== sku);

		this.setState({ list: newList }, this.updateStorage);
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
