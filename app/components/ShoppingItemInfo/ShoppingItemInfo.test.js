import React from 'react';
import { shallow } from 'enzyme';
import ShoppingItemInfo from './ShoppingItemInfo';

describe('ShoppingItemInfo', () => {
	it('should render text with name, price, sku, and Amazon link', () => {
		const info = shallow(
			<ShoppingItemInfo
				name="DVD"
				price={19.99}
				sku="abcdefg" />
		);

		expect(info.find('p').length).toEqual(3);
		expect(info.find('p').at(0).text()).toEqual('DVD');
		expect(info.find('p').at(1).text()).toEqual('$19.99');
		expect(info.find('p').at(2).text()).toEqual('SKU: abcdefg');
		expect(info.find('AmazonButton').length).toEqual(1);
	});

	it('should render price with 2 decimal places', () => {
		const info = shallow(
			<ShoppingItemInfo
				name="DVD"
				price={19}
				sku="abcdefg" />
		);

		expect(info.find('p').at(1).text()).toEqual('$19.00');
	});
});
