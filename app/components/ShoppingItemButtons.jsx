import React, { PropTypes } from 'react';

const ShoppingItemButtons = ({ editTodo, deleteTodo }) => {
	return (
		<div className="ShoppingItem_Buttons">
			<button onClick={editTodo}>
				Edit
			</button>
			<button onClick={deleteTodo}>
				Delete
			</button>
		</div>
	);
};

ShoppingItemButtons.propTypes = {
	editTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired
};

export default ShoppingItemButtons;
