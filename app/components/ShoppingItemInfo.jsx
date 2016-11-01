import React, { PropTypes } from 'react';

const ShoppingItemInfo = ({ name, price, sku }) => {
	return (
		<div className="ShoppingItem_Info">
			<p className="ShoppingItem_Info_Name">{name}</p>
			<p className="ShoppingItem_Info_Price">${price}</p>
			<p className="ShoppingItem_Info_SKU">SKU: {sku}</p>
		</div>
	);
};

ShoppingItemInfo.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	sku: PropTypes.string.isRequired
};

export default ShoppingItemInfo;
