import uuid from 'node-uuid';
import alt from '../libs/alt';
import ItemActions from '../actions/ItemActions';

class ItemStore {
  constructor() {
    this.bindActions(ItemActions);

    this.items = []
  }

  create(item) {
    const items = this.items;

    item.id = uuid.v4();

    this.setState({
      items: items.concat(item)
    });
  }

  update(updatedItem) {
    const items = this.items.map(item => {
      if(item.id === updatedItem.id) {
        return Object.assign({}, item, updatedItem)
      }
      return item;
    });
    this.setState({items});
  }

  delete(id) {
    this.setState({
      items: this.items.filter(item => item.id !== id)
    });
  }
}

export default alt.createStore(ItemStore, 'ItemStore');