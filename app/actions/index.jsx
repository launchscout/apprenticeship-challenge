import alt from '../alt';
import Firebase from 'firebase';

class Actions {
  constructor(){
    this.generateActions(
      'collectionsReceived',
      'collectionsFailed',
      'groceryListsReceived',
      'groceryListsFailed',
      'collectionSelected',
      'groceryListsLoading',
      'createGroceryItem',
      'groceryItemSuccess',
      'groceryItemError',
      'groceryItemReceived'
    );
  }
}

export default alt.createActions(Actions);
