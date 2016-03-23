import React from 'react';
import uuid from 'node-uuid';
// import Note from './Note.jsx';

export default class App extends React.Component {
  
	constructor(props) {
		super(props);

		this.state = {
			notes: [
				{
					id: uuid.v4(),
					task: 'Learn Webpack'
				},
				{
					id: uuid.v4(),
					task: 'Learn React'
				},
				{
					id: uuid.v4(),
					task: 'Do laundry'
				}
			]
		};
	}

	render() {

		const notes = this.state.notes;

		console.log(notes);	

		return (
			<div>
				<button onClick={this.addNote}>+</button>
				<ul>{notes.map(note => <li key={note.id}>{note.task}</li> )}</ul>
			</div>
		);
	}

	addNote = () => {
		this.setState({
			notes: this.state.notes.concat([{
				id: uuid.v4(),
				task: 'New task'
			}])
		});
	};
}
