// import uuid from 'node-uuid';
import React from 'react';
// import Item from './Item.jsx';
import Items from './Items.jsx';


import ItemActions from '../actions/ItemActions';
import ItemStore from '../stores/ItemStore';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = ItemStore.getState();
  }

  componentDidMount() {
    ItemStore.listen(this.storeChanged);
  }

  componentWillUnmount() {
    ItemStore.unlisten(this.storeChanged);
  }

  storeChanged = (state) => {
    this.setState(state);
  };

  render() {
    const items = this.state.items;

    return (
      <div>
        <button className="add-item" onClick={this.addItem}>Add Item</button>
        <Items items={items}
          onEdit={this.editItem}
          onDelete={this.deleteItem} />
      </div>
    );
  }

  deleteItem = (id, e) => {
    e.stopPropagation();

    ItemActions.delete(id)
  }

  addItem = () => {
    ItemActions.create({name: 'New Name'});
  }

  editItem = (id, name) => {
    if(!name.trim()) {
      return;
    }

   ItemActions.update({id, name})
  };

}
