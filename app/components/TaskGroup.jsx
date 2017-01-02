import React from 'react';

import Task from './Task.jsx';
import Editable from './Editable';


export default ({
    notes,
    onNoteClick=() => {}, onEdit=() => {}, onDelete=() => {}
}) => (
    <ul className="taskgroup">{notes.map(({id, editing, task}) =>
        <li key={id}>
            <Task className="task" onClick={onNoteClick.bind(null, id)}>
                <Editable
                    className="editable"
                    editing={editing}
                    value={task}
                    onEdit={onEdit.bind(null, id)} />
                <button className="delete" onClick={onDelete.bind(null, id)}>x</button>
            </Task>
        </li>
    )}</ul>
)