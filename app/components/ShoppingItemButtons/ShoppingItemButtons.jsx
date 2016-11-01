import React, { PropTypes } from 'react';
import styles from './style';

const ShoppingItemButtons = ({ editItem, deleteItem }) => {
	return (
		<div style={styles.container}>
			<button
				style={styles.editButton}
				onClick={editItem}>
				Edit
			</button>
			<button
				style={styles.deleteButton}
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
