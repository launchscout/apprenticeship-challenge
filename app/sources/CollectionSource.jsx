import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = new Firebase('https://gaslightchallenge.firebaseio.com/collections');

let CollectionSource = {
  getCollections: {
    remote(state){
      return new Promise((resolve, reject) => {
        firebaseRef.once("value", (data)=> {
          let collections = data.val();
          resolve(collections);
        });
      });
    },
    success: Actions.collectionsReceived,
    error: Actions.collectionsFailed
  }
}

export default CollectionSource;
