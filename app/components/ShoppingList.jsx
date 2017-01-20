import React from 'react';

import Item from './Item.jsx';
import Editable from './Editable';


export default ({
    notes,
    onNoteClick=() => {}, onEdit=() => {}, onDelete=() => {}
}) => (
    <ul className="shoppinglist">{notes.map(({id, editing, task}) =>
        <li key={id}>
            <Item className="item" onClick={onNoteClick.bind(null, id)}>
                <Editable
                    className="editable"
                    editing={editing}
                    value={task}
                    placeholder="Click to edit"
                    onEdit={onEdit.bind(null, id)} />
                <button className="delete" onClick={onDelete.bind(null, id)}>X</button>
            </Item>
        </li>
    )}</ul>
)