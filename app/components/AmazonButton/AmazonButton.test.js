import React from 'react';
import { shallow } from 'enzyme';
import AmazonButton from './AmazonButton';

describe('AmazonButton', () => {
	it('should render an anchor tag to amazon', () => {
		const wrapper = shallow(
			<AmazonButton
				item="DVD" />
		);

		expect(wrapper.find('a').length).toEqual(1);

		const url = 'https://www.amazon.com/s/field-keywords=DVD';
		expect(wrapper.find({ href: url }).length).toEqual(1);
	});

	it('should render an anchor tag with "+" instead of spaces', () => {
		const wrapper = shallow(
			<AmazonButton
				item="Teddy Bears" />
		);

		const url = 'https://www.amazon.com/s/field-keywords=Teddy+Bears';
		expect(wrapper.find({ href: url }).length).toEqual(1);
	});
});
