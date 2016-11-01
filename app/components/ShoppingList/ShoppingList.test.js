import React from 'react';
import { shallow } from 'enzyme';
import ShoppingList from './ShoppingList';
import ShoppingItem from '../ShoppingItem/ShoppingItem';

describe('ShoppingList', () => {
	it('should render out a ShoppingItem component for each item', () => {
		const list = [
			{ name: 'DVD', sku: 'abc123', price: 19.99 },
			{ name: 'Beer', sku: 'bcd234', price: 6.99 }
		];
		const wrapper = shallow(
			<ShoppingList
				list={list}
				editItem={() => {}}
				deleteItem={() => {}} />
		);

		expect(wrapper.find('ShoppingItem').length).toEqual(2);
	});

	it('should pass down editItem and deleteItem props to ShoppingItem components', () => {
		const editCb = () => {};
		const deleteCb = () => {};
		const list = [
			{ name: 'DVD', sku: 'abc123', price: 19.99 }
		];
		const wrapper = shallow(
			<ShoppingList
				list={list}
				editItem={editCb}
				deleteItem={deleteCb} />
		);

		const item = (
			<ShoppingItem
				name="DVD"
				sku="abc123"
				price={19.99}
				editItem={editCb}
				deleteItem={deleteCb} />
		);

		expect(wrapper.contains(item)).toEqual(true);
	});
});
