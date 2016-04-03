import AltContainer from 'alt-container';
import React from 'react';
import Items from './Items.jsx';
import ItemActions from '../actions/ItemActions';
import ItemStore from '../stores/ItemStore';

export default class App extends React.Component {

  render() {

    return (
      <div>
        <button className="add-item" onClick={this.addItem}>Add Item</button>

        <AltContainer
          stores={[ItemStore]}
          inject={{
            items: () => ItemStore.getState().items
          }}
         >
          <Items onEdit={this.editItem}onDelete={this.deleteItem} />
      </AltContainer>
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
