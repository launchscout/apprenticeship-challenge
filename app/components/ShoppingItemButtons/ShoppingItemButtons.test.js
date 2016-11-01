import React from 'react';
import { shallow } from 'enzyme';
import ShoppingItemButtons from './ShoppingItemButtons';

describe('ShoppingItemButtons', () => {
	it('should render 2 buttons', () => {
		const wrapper = shallow(
			<ShoppingItemButtons
				editItem={() => {}}
				deleteItem={() => {}} />
		);

		expect(wrapper.find('button').length).toEqual(2);
		expect(wrapper.find('button').at(0).text()).toEqual('Edit');
		expect(wrapper.find('button').at(1).text()).toEqual('Delete');
	});

	it('should call editItem when edit button is clicked', () => {
		let editItemInvoked = false;
		const cb = () => editItemInvoked = true;

		const wrapper = shallow(
			<ShoppingItemButtons
				editItem={cb}
				deleteItem={() => {}} />
		);

		const editButton = wrapper.find('button').at(0);
		editButton.simulate('click');

		expect(editItemInvoked).toEqual(true);
	});

	it('should call deleteItem when delete button is clicked', () => {
		let deleteItemInvoked = false;
		const cb = () => deleteItemInvoked = true;

		const wrapper = shallow(
			<ShoppingItemButtons
				editItem={() => {}}
				deleteItem={cb} />
		);

		const deleteButton = wrapper.find('button').at(1);
		deleteButton.simulate('click');

		expect(deleteItemInvoked).toEqual(true);
	});
});
