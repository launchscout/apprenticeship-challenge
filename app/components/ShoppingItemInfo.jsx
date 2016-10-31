import React, { PropTypes } from 'react';

const ShoppingItemInfo = ({ name, price, sku }) => {
	return (
		<div className="ShoppingItem_Info">
			<p>{name}</p>
			<p>{price}</p>
			<p>{sku}</p>
		</div>
	);
};

ShoppingItemInfo.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	sku: PropTypes.string.isRequired
};

export default ShoppingItemInfo;
