import uuid from 'node-uuid';
import alt from '../libs/alt';
import ItemActions from '../actions/ItemActions';

class ItemStore {
  constructor() {
    // bind actions to crud
    this.bindActions(ItemActions);

    this.items = [];
  }

  create(item) {
    const items = this.items;

    item.id = uuid.v4();

    // update item
    this.setState({
      items: items.concat(item)
    })
  }

  update(updatedItem) {
    const items = this.items.map(item => {
      if (item.id == updatedItem.id) {
        // updatedItem will be patched to {}
        return Object.assign({}, item, updatedItem);
      }
      return item;
    });
    // {items: items} short hand {items}
    this.setState({items});
  }

  delete(id) {
    this.setState({
      // [...items.slice(o, itemIndex), ...items.slice(itemIndex + 1)]
      items: this.items.filter(item => item.id !== id)
    });
  }
}

// connect alt to store
export default alt.createStore(ItemStore, "ItemStore");
