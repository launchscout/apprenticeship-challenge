import React from 'react';

export default class Note extends React.Component {

	render() {
		return this.renderNote();
	}

	renderNote = () => {
		// If the user clicks a normal note, trigger editing logic.
		const onDelete = this.props.onDelete;

		return (
			<tr>
				<td>{this.props.name}</td>
				<td>{this.props.price}</td>
				<td>{this.props.sku}</td>
				<td>{onDelete ? this.renderDelete() : null }</td>
			</tr>
		);
	};

	renderDelete = () => {
		return <button onClick={this.props.onDelete}>x</button>;
	};

}