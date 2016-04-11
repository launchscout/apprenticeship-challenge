import uuid from 'node-uuid';
import alt from '../libs/alt';
import ItemActions from '../actions/ItemActions';

import Firebase from 'firebase';
var itemData = new Firebase('https://stamates-shopping.firebaseio.com/items');

class ItemStore {
  constructor() {
    this.bindActions(ItemActions);
    this.items = [];
    itemData.on("value", function(snapshot) {
      var items = [];
      snapshot.forEach(function(data) {
        items.push(data.val());
      }.bind(this));
      this.setState({items});
    }.bind(this));
    this.exportPublicMethods({
      getItemsByIds: this.getItemsByIds.bind(this)
    });
  }
  create(item) {
    const items = this.items;
    item.id = uuid.v4();
    this.setState({
      items: items.concat(item)
    });
    itemData.push(item);
    return item;
  }
  update(updatedItem) {
    const items = this.items.map(item => {
      if (item.id === updatedItem.id) {
        return Object.assign({}, item, updatedItem);
      }
      return item;
    });
    this.setState({items});
    itemData.set(items);
  }
  getItemsByIds(ids) {
    return (ids || []).map(
      id => this.items.filter(item => item.id === id)
    ).filter(a => a.length).map(a => a[0]);
  }
}

export default alt.createStore(ItemStore, 'ItemStore');
