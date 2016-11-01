import React from 'react';
import { shallow, mount } from 'enzyme';
import ShoppingItem from './ShoppingItem';

describe('ShoppingItem', () => {
	it('should render Shopping Info and Buttons', () => {
		const wrapper = shallow(
			<ShoppingItem
				name="DVD"
				sku="abcdefg"
				price={19.99}
				editItem={() => {}}
				deleteItem={() => {}}
			/>
		);

		expect(wrapper.find('ShoppingItemInfo').length).toEqual(1);
		expect(wrapper.find('ShoppingItemButtons').length).toEqual(1);
		expect(wrapper.find('EditBox').length).toEqual(0);
	});

	it('should toggle Edit Box when edit button is clicked', () => {
		const wrapper = mount(
			<ShoppingItem
				name="DVD"
				sku="abcdefg"
				price={19.99}
				editItem={() => {}}
				deleteItem={() => {}}
			/>
		);

		const toggleEditButton = wrapper.find('ShoppingItemButtons').find('button').at(0);
		toggleEditButton.simulate('click');

		expect(wrapper.find('EditBox').length).toEqual(1);
		expect(wrapper.find('ShoppingItemInfo').length).toEqual(0);
		expect(wrapper.find('ShoppingItemButtons').length).toEqual(0);
	});

	it('should call editItem when edit button is clicked', () => {
		let editInvoked = false;
		const cb = (data) => editInvoked = data;

		const wrapper = mount(
			<ShoppingItem
				name="DVD"
				sku="abcdefg"
				price={19.99}
				editItem={cb}
				deleteItem={() => {}}
			/>
		);

		const toggleEditButton = wrapper.find('ShoppingItemButtons').find('button').at(0);
		toggleEditButton.simulate('click');

		const editButton = wrapper.find('EditBox').find('button').at(0);
		editButton.simulate('click');

		expect(editInvoked).toEqual({
			name: 'DVD',
			sku: 'abcdefg',
			price: 19.99,
			targetSku: 'abcdefg'
		});
	});

	it('should hide EditBox after edit is complete', () => {
		const wrapper = mount(
			<ShoppingItem
				name="DVD"
				sku="abcdefg"
				price={19.99}
				editItem={() => {}}
				deleteItem={() => {}}
			/>
		);

		const toggleEditButton = wrapper.find('ShoppingItemButtons').find('button').at(0);
		toggleEditButton.simulate('click');

		const editButton = wrapper.find('EditBox').find('button').at(0);
		editButton.simulate('click');

		expect(wrapper.find('EditBox').length).toEqual(0);
	});

	it('should call deleteItem when delete button is clicked', () => {
		let deleteInvoked = false;
		const cb = (sku) => deleteInvoked = sku;

		const wrapper = mount(
			<ShoppingItem
				name="DVD"
				sku="abcdefg"
				price={19.99}
				editItem={() => {}}
				deleteItem={cb}
			/>
		);

		const deleteButton = wrapper.find('ShoppingItemButtons').find('button').at(1);
		deleteButton.simulate('click');

		expect(deleteInvoked).toEqual('abcdefg');
	});
});
