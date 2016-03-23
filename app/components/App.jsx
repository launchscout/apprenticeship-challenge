// import uuid from 'node-uuid';
import React from 'react';
import Firebase from 'firebase';
import Items from './Items.jsx';
import ItemActions from '../actions/ItemActions';
import ItemStore from '../stores/ItemStore';

export default class App extends React.Component {
  constructor(props) {
    // get the context of 'this'
    super(props);
    this.firebaseRef = new Firebase('https://appshoppinglist.firebaseio.com/items/');

    // this.state = {
      // items: [
        // {
          // id: uuid.v4(),
          // body: "Learn React",
        // },
        // {
          // id: uuid.v4(),
          // body: "Learn it well",
        // },
        // {
          // id: uuid.v4(),
          // body: "Learn it now",
        // }
      // ]
    // };
    
    // set 'this' so we have access to it in our storeChanged
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
        <button onClick={this.addItem}>+</button>
        <Items 
          items={items} 
          onEdit={this.editItem}
          onDelete={this.deleteItem}
        />
      </div>
    ); 
  } 

  // addItem = () => {
    // this.setState({
      // items: this.state.items.concat([{
        // id: uuid.v4(),
        // body: 'New Item'
      // }])
    // });
  // };

  addItem() {
    ItemActions.create({body: "New Item" })
  }

  // editItem = (id, itemBody) => {
    // if(!itemBody.trim()) {
      // return;
    // }
    // const items = this.state.items.map(item => {
      // if (item.id === id && itemBody) {
        // item.body = itemBody;
      // }
      // return item;
    // });
    // this.setState({items});
  // };

  editItem(id, body) {
    if(!body.trim()) {
      return;
    }
    ItemActions.update({id, body});
  }
  // deleteItem = (id, event) => {
    // // Avoid bubbling to edit
    // event.stopPropagation();

    // this.setState({
      // items: this.state.items.filter(item => item.id !== id)
    // });
  // };
  
  deleteItem(id, event) {
    event.stopPropagation();
    ItemActions.delete(id);
  }
}
