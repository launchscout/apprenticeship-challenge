import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = null;

let GrocerySource = {
  getGroceryLists: {
    remote(state){
      if(firebaseRef){
        firebaseRef.off();
      }

      firebaseRef = new Firebase(`https://gaslightchallenge.firebaseio.com/groceryLists/${state.selectedCollection.key}`);

      return new Promise((resolve, reject) => {
        firebaseRef.once("value", (data) => {
          let groceryLists = data.val();
          resolve(groceryLists);

          setTimeout(() => {
            firebaseRef.on("child_added", ((item) => {
              let itemVal = item.val();
              itemVal.key = item.key();
              Actions.listReceived(itemVal);
            }));
          }, 10);
        })
      });
    },
    success: Actions.groceryListsReceived,
    error: Actions.groceryListsFailed,
    loading: Actions.groceryListsLoading
  },
  createGroceryItem: {
    remote(state){
      return new Promise((resolve,reject) => {
        if(!firebaseRef){
          return resolve();
        }

        firebaseRef.push({
          "name": state.itemName,
          "sku": state.itemSku,
          "price": state.itemPrice
        });
        resolve();
      });
    },
    success: Actions.groceryItemSuccess,
    error: Actions.groceryItemError
  }
}

export default GrocerySource;
