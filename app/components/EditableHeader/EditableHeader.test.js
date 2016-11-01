import React from 'react';
import { shallow } from 'enzyme';
import EditableHeader from './EditableHeader';

describe('EditableHeader', () => {
	it('should render an input box and button', () => {
		const wrapper = shallow(
			<EditableHeader
				title='Shopping List'
				updateTitle={() => {}} />
		);

		expect(wrapper.find('input').length).toEqual(1);
		expect(wrapper.find('button').length).toEqual(1);
	});

	it('should update state when input box is changed', () => {
		const wrapper = shallow(
			<EditableHeader
				title='Shopping List'
				updateTitle={() => {}} />
		);

		const input = wrapper.find('input').at(0);
		input.simulate('change', { target: { value: 'Shopping List!' } });

		expect(wrapper.state()).toEqual({
			title: 'Shopping List!'
		});
	});

	it('should call updateTitle when button is clicked', () => {
		let updateTitleInvoked = false;
		const cb = (title) => updateTitleInvoked = title;

		const wrapper = shallow(
			<EditableHeader
				title='Shopping List'
				updateTitle={cb} />
		);

		const button = wrapper.find('button').at(0);
		button.simulate('click');

		expect(updateTitleInvoked).toEqual('Shopping List');
	});
});
