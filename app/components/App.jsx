import React from 'react';
import uuid from 'uuid';
import Item from './ShoppingList.jsx';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            task: [
            ]
        };
    }

    render() {
        const {task} = this.state;

        return (
            <div>
                <button className="button"  onClick={this.addNote}>+ Add Item</button>
                <Item
                    notes={task}
                    onNoteClick={this.activateNoteEdit}
                    onEdit={this.editNote}
                    onDelete={this.deleteNote}/>
            </div>
        );
    }

    addNote = () => {
        this.setState({
            task: this.state.task.concat([{
                id: uuid.v4(),
                task: 'Click to edit'
            }])
        });
    }

    deleteNote = (id, e) => {
        // Avoid bubbling to edit
        e.stopPropagation();

        this.setState({
            task: this.state.task.filter(note => note.id !== id)
        });
    }

    activateNoteEdit = (id) => {
        this.setState({
            task: this.state.task.map(note => {
                if(note.id === id) {
                    note.editing = true;
                }

                return note;
            })
        });
    }
    editNote = (id, task) => {
        this.setState({
            task: this.state.task.map(note => {
                if(note.id === id) {
                    note.editing = false;
                    note.task = task;
                }

                return note;
            })
        });
    }

}