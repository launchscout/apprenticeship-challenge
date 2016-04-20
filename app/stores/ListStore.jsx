import alt from '../alt';
import Actions from '../actions';
import {decorate, bind, datasource} from 'alt/utils/decorators';
import CollectionSource from '../sources/CollectionSource.jsx';
import GrocerySource from '../sources/GrocerySource.jsx';
import _ from 'lodash';

@datasource(CollectionSource, GrocerySource)
@decorate(alt)
class ListStore {
  constructor(){
    this.state = {
      groceryList: null,
      groceryListsLoading: true
    };
  }

  @bind(Actions.groceryListsLoading)
  groceryListsLoading(){
    this.setState({
      groceryListsLoading: true
    });
  }

  @bind(Actions.groceryListsReceived)
  receivedGroceryLists(groceryLists){
    _(groceryLists)
      .keys()
      .each((k) => {
        groceryLists[k].key = k;
      })
      .value();

    this.setState({
      groceryLists,
      groceryListsLoading: false
    });
  }

  @bind(Actions.createGroceryItem)
  createGroceryItem(groceryItem){
    this.state.groceryItem = groceryItem;
    setTimeout(this.getInstance().createGroceryItem, 10);
  }

  @bind(Actions.groceryItemReceived)
  groceryItemReceived(groceryItem){
    if(this.state.groceryList[groceryItem.key]){
      return;
    }
    this.state.groceryList[groceryItem.key] = groceryItem;

    this.setState({
      groceryList: this.state.groceryList
    });
  }

  @bind(Actions.collectionSelected)
  collectionSelected(selectedCollection){
    _(this.state.collections)
      .values()
      .each((collection) = > {
        collection.selected = false;
      })
      .value();

    selectedCollection.selected = true;

    this.setState({
      selectedCollection,
      collections: this.state.collections,

    });

    setTimeout(this.getInstance().getGroceryLists, 100);
  }

  @bind(Actions.collectionsReceived)
  receivedCollections(collections){
    let selectedCollection;
    _(collections)
      .keys()
      .each((key, index) => {
        collections[key].key = key;
        if(index == 0){
          collections[key].selected = true;
          selectedCollection = collections[key];
        }
      })
      .value();

    this.setState({
      collections,
      selectedCollection,

    });

    setTimeout(this.getInstance().getGroceryLists, 100);
  }
}

export default alt.createStore(ListStore);
