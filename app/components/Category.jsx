import AltContainer from 'alt-container';
import React from 'react';
import Notes from './Notes.jsx';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
import CategoryActions from '../actions/CategoryActions';
import Editable from './Editable.jsx';
import {DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;

    if(!targetProps.category.notes.length) {
      CategoryActions.attachToCategory({
        categoryId: targetProps.category.id,
        noteId: sourceId
      });
    }
  }
};

@DropTarget(ItemTypes.NOTE, noteTarget, (connect) => ({
  connectDropTarget: connect.dropTarget()
}))
export default class Category extends React.Component {
  render() {
    const {connectDropTarget, category, ...props} = this.props;

    return connectDropTarget(
      <div className="cat-wrapper" {...props}>
        <div className="cat-header" onClick={this.activateCategoryEdit}>
          
          <Editable className="cat-name" editing={category.editing}
            value={category.name} onEdit={this.editName} />
          <div className="cat-delete">
            <button onClick={this.deleteCategory}>x</button>
          </div>
        </div>
        <AltContainer
          stores={[NoteStore]}
          inject={{
            notes: () => NoteStore.getNotesByIds(category.notes)
          }}
        >
        <div className="cat-add-note">
            <button onClick={this.addNote}>+ Item</button>
          </div>
          <Notes
            onValueClick={this.activateNoteEdit}
            onEdit={this.editNote}
            onDelete={this.deleteNote} />
            
        </AltContainer>
      </div>
    );
  }
  editNote(id, task) {
    // Don't modify if trying set an empty value
    if(!task.trim()) {
      NoteActions.update({id, editing: false});

      return;
    }

    NoteActions.update({id, task, editing: false});
  }
  addNote = (e) => {
    e.stopPropagation();

    const categoryId = this.props.category.id;
    const note = NoteActions.create({task: 'To buy...'});

    CategoryActions.attachToCategory({
      noteId: note.id,
      categoryId
    });
  };
  deleteNote = (noteId, e) => {
    e.stopPropagation();

    const categoryId = this.props.category.id;

    CategoryActions.detachFromCategory({categoryId, noteId});
    NoteActions.delete(noteId);
  };
  editName = (name) => {
    const categoryId = this.props.category.id;
    if(!name.trim()) {
      CategoryActions.update({id: categoryId, editing: false});

      return;
    }

    CategoryActions.update({id: categoryId, name, editing: false});
  };
  deleteCategory = () => {
    const categoryId = this.props.category.id;

    CategoryActions.delete(categoryId);
  };
  activateCategoryEdit = () => {
    const categoryId = this.props.category.id;

    CategoryActions.update({id: categoryId, editing: true});
  };
  activateNoteEdit(id) {
    NoteActions.update({id, editing: true});
  }
}