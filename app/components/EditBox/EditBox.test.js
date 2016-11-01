import React from 'react';
import { shallow } from 'enzyme';
import EditBox from './EditBox';

describe('EditBox', () => {
	it('should render a header', () => {
		const wrapper = shallow(
			<EditBox
				title="Hello World"
				addItem={() => {}}
				name="DVD"
				sku="abcdefg"
				price={19.99} />
		);

		expect(wrapper.find('h1').length).toEqual(1);
		expect(wrapper.find('h1').text()).toEqual('Hello World');
	});

	it('should render input boxes and a button', () => {
		const wrapper = shallow(
			<EditBox
				title="Hello World"
				addItem={() => {}}
				name="DVD"
				sku="abcdefg"
				price={19.99} />
		);

		expect(wrapper.find('input').length).toEqual(3);
		expect(wrapper.find('button').length).toEqual(1);
	});

	it('should call addItem when button is clicked', () => {
		let addItemInvoked = false;
		const cb = (item) => addItemInvoked = item;

		const wrapper = shallow(
			<EditBox
				title="Hello World"
				addItem={cb}
				name="DVD"
				sku="abcdefg"
				price={19.99} />
		);

		const addButton = wrapper.find('button').at(0);
		addButton.simulate('click');

		expect(addItemInvoked).toEqual({
			name: 'DVD',
			sku: 'abcdefg',
			price: 19.99
		});
	});

	it('should update state when input boxes are updated', () => {
		const wrapper = shallow(
			<EditBox
				title="Hello World"
				addItem={() => {}}
				name="DVD"
				sku="abcdefg"
				price={19.99} />
		);

		const nameInput = wrapper.find('input').at(0);
		const skuInput = wrapper.find('input').at(1);
		const priceInput = wrapper.find('input').at(2);

		nameInput.simulate('change', { target: { value: 'DVD Player' } });
		skuInput.simulate('change', { target: { value: 'abcdefghij'} });
		priceInput.simulate('change', { target: { value: '21.99' } });

		expect(wrapper.state()).toEqual({
			name: 'DVD Player',
			sku: 'abcdefghij',
			price: '21.99'
		});
	});
});
