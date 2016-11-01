import React, { PropTypes } from 'react';

const ShoppingItemButtons = ({ editItem, deleteItem }) => {
	return (
		<div className="ShoppingItem_Buttons">
			<button onClick={editItem}>
				Edit
			</button>
			<button onClick={deleteItem}>
				Delete
			</button>
		</div>
	);
};

ShoppingItemButtons.propTypes = {
	editItem: PropTypes.func.isRequired,
	deleteItem: PropTypes.func.isRequired
};

export default ShoppingItemButtons;
