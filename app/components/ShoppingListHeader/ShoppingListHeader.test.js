import React from 'react';
import { shallow, mount } from 'enzyme';
import ShoppingListHeader from './ShoppingListHeader';

describe('ShoppingListHeader', () => {
	it('should render a title', () => {
		const wrapper = shallow(
			<ShoppingListHeader
				addItem={() => {}}
				editHeader={() => {}}
				title="Hello World" />
		);

		expect(wrapper.find('h1').text()).toEqual('Hello World');
	});

	it('should render an EditableHeader when header is clicked', () => {
		const wrapper = shallow(
			<ShoppingListHeader
				addItem={() => {}}
				editHeader={() => {}}
				title="Hello World" />
		);

		expect(wrapper.find('EditableHeader').length).toEqual(0);

		const header = wrapper.find('h1').at(0);
		header.simulate('click');

		expect(wrapper.find('EditableHeader').length).toEqual(1);
	});

	it('should render an EditBox when the addButton is clicked', () => {
		const wrapper = shallow(
			<ShoppingListHeader
				addItem={() => {}}
				editHeader={() => {}}
				title="Hello World" />
		);

		expect(wrapper.find('EditBox').length).toEqual(0);

		const addButton = wrapper.find('button').at(0);
		addButton.simulate('click');

		expect(wrapper.find('EditBox').length).toEqual(1);
	});

	it('should call addItem when button in EditBox is clicked', () => {
		let addItemInvoked = false;
		const cb = () => addItemInvoked = true;

		const wrapper = mount(
			<ShoppingListHeader
				addItem={cb}
				editHeader={() => {}}
				title="Hello World" />
		);

		const addButton = wrapper.find('button').at(0);
		addButton.simulate('click');

		const updateButton = wrapper.find('EditBox').find('button').at(0);
		updateButton.simulate('click');

		expect(addItemInvoked).toEqual(true);
	});

	it('should call editHeader when button in EditableHeader is clicked', () => {
		let editHeaderInvoked = false;
		const cb = () => editHeaderInvoked = true;

		const wrapper = mount(
			<ShoppingListHeader
				addItem={() => {}}
				editHeader={cb}
				title="Hello World" />
		);

		const header = wrapper.find('h1').at(0);
		header.simulate('click');

		const editButton = wrapper.find('EditableHeader').find('button').at(0);
		editButton.simulate('click');

		expect(editHeaderInvoked).toEqual(true);
	});
});
