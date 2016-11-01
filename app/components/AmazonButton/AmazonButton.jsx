import React, { PropTypes } from 'react';

const AmazonButton = ({ item }) => {
	const keyword = item.split(' ').join('+');
	const href = `https://www.amazon.com/s/field-keywords=${keyword}`;

	return (
		<div>
			<a
				target="_blank"
				href={href}>
					Amazon
			</a>
		</div>
	);
};

AmazonButton.propTypes = {
	item: PropTypes.string.isRequired
};

export default AmazonButton;
