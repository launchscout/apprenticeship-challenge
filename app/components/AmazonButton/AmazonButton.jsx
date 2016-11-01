import React, { PropTypes } from 'react';
import styles from './style';

const AmazonButton = ({ item }) => {
	const keyword = item.split(' ').join('+');
	const href = `https://www.amazon.com/s/field-keywords=${keyword}`;

	return (
		<div>
			<a
				style={styles.link}
				target="_blank"
				href={href}>
					Find on Amazon
			</a>
		</div>
	);
};

AmazonButton.propTypes = {
	item: PropTypes.string.isRequired
};

export default AmazonButton;
