import React, { PropTypes } from 'react';

const ShoppingItemButtons = ({ editItem, deleteItem }) => {
	return (
		<div className="ShoppingItem_Buttons">
			<button
				className="button_add"
				onClick={editItem}>
				Edit
			</button>
			<button
				className="button_delete"
				onClick={deleteItem}>
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
