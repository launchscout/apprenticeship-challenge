import React, { PropTypes } from 'react';
import styles from './style';

const ShoppingItemInfo = ({ name, price, sku }) => {
	const itemNameStyle = styles.itemName;
	const itemPriceStyle = styles.itemPrice;
	const itemSkuStyle = styles.itemSku;

	return (
		<div>
			<p style={itemNameStyle}>{name}</p>
			<p style={itemPriceStyle}>${price.toFixed(2)}</p>
			<p style={itemSkuStyle}>SKU: {sku}</p>
		</div>
	);
};

ShoppingItemInfo.propTypes = {
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	sku: PropTypes.string.isRequired
};

export default ShoppingItemInfo;
