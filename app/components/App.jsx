// import uuid from 'node-uuid';
import React from 'react';
import Items from './Items.jsx';
// import ItemActions from '../actions/ItemActions';
// import ItemStore from '../stores/ItemStore';
// import AltContainer from 'alt-container';
// import Rebase from 're-base';

// const base = new Rebase.createClass('https://appshoppinglist.firebaseio.com/items/');

// export default class App extends React.Component {
  // render() {
    // return (
     // <div>
        // <button onClick={this.addItem}>+</button>
        // <AltContainer
          // stores={[ItemStore]}
          // inject={{
            // items: () => ItemStore.getState().items
          // }}
        // >
          // <Items 
            // onEdit={this.editItem}
            // onDelete={this.deleteItem}
          // />
        // </AltContainer>
      // </div>
    // ); 
  // } 

  // componentDidMount() {
    // ItemStore.listen(this.storeChanged);
  // }
  // componentWillUnmount() {
    // ItemStore.unlisten(this.storeChanged);
  // }

  // storeChanged = (state) => {
    // this.setState(state)
  // }

  // addItem() {
    // ItemActions.create({text: "New Shopping Item" })
  // }

  // editItem(id, text) {
    // if(!text.trim()) {
      // return;
    // }
    // ItemActions.update({id, text});
  // }
  
  // deleteItem(id, event) {
    // event.stopPropagation();
    // ItemActions.delete(id);
  // }

export default class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.addItem}>+</button>
        <Items />
      </div>
    ); 
  } 
  addItem() {
    ({text: "New Shopping Item" })
  }
}
