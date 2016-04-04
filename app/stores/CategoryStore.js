import uuid from 'node-uuid';
import alt from '../libs/alt';
import CategoryActions from '../actions/CategoryActions';
import update from 'react-addons-update';

class CategoryStore {
  constructor() {
    this.bindActions(CategoryActions);
    
    this.categories = [];
  }
  
  create(category) {
    const categories = this.categories;
    
    category.id = uuid.v4();
    category.notes = category.notes || [];
    
    this.setState({
      categories: categories.concat(category)
    });
  }
  
  update(updatedCategory) {
    const categories = this.categories.map(category => {
      if(category.id === updatedCategory.id) {
        return Object.assign({}, category, updatedCategory);
      }
      return category;
    });
    this.setState({categories});
  }
  
  delete(id) {
    this.setState({
      categories: this.categories.filter(category => category.id !== id)
    });
  }
  
  attachToCategory({categoryId, noteId}) {
    const categories = this.categories.map(category => {
      if(category.notes.includes(noteId)) {
        category.notes = category.notes.filter(note => note !== noteId);
      }
      
      if(category.id === categoryId) {
        if(category.notes.includes(noteId)) {
          console.warn('Already attached note to category', categories);
        }
        else {
          category.notes.push(noteId);
        }
      }
      return category;
    });
    this.setState({categories});
  }
  
  detachFromCategory({categoryId, noteId}) {
    const categories = this.categories.map(category => {
      if(category.id === categoryId) {
        category.notes = category.notes.filter(note => note !== noteId);
      }
      return category;
    });
    this.setState({categories});
  }
  
  move({sourceId, targetId}) {
    const categories = this.categories;
    const sourceCategory = categories.filter(lane => lane.notes.includes(sourceId))[0];
    const targetCategory = categories.filter(lane => lane.notes.includes(targetId))[0];
    const sourceNoteIndex = sourceCategory.notes.indexOf(sourceId);
    const targetNoteIndex = targetCategory.notes.indexOf(targetId);

    if(sourceCategory === targetCategory) {
      // move at once to avoid complications
      sourceCategory.notes = update(sourceCategory.notes, {
        $splice: [
          [sourceNoteIndex, 1],
          [targetNoteIndex, 0, sourceId]
        ]
      });
    }
    else {
      // get rid of the source
      sourceCategory.notes.splice(sourceNoteIndex, 1);

      // and move it to target
      targetCategory.notes.splice(targetNoteIndex, 0, sourceId);
    }

    this.setState({categories});
  }
}

export default alt.createStore(CategoryStore, 'CategoryStore')