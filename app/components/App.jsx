// import uuid from 'node-uuid';
import React from 'react';
import Items from './Items.jsx';
import ItemActions from '../actions/ItemActions';
import ItemStore from '../stores/ItemStore';
import AltContainer from 'alt-container';
import Rebase from 're-base';

const base = new Rebase.createClass('https://appshoppinglist.firebaseio.com/items/');

export default class App extends React.Component {
  render() {
    return (
     <div>
        <button onClick={this.addItem}>+</button>
        <AltContainer
          stores={[ItemStore]}
          inject={{
            items: () => ItemStore.getState().items
          }}
        >
          <Items 
            onEdit={this.editItem}
            onDelete={this.deleteItem}
          />
        </AltContainer>
      </div>
    ); 
  } 

  addItem() {
    ItemActions.create({body: "New Item" })
  }

  editItem(id, body) {
    if(!body.trim()) {
      return;
    }
    ItemActions.update({id, body});
  }
  
  deleteItem(id, event) {
    event.stopPropagation();
    ItemActions.delete(id);
  }
}
