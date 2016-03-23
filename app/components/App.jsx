import uuid from 'node-uuid';
import React from 'react';
import Firebase from 'firebase';
import Items from './Items.jsx';

export default class App extends React.Component {
  constructor(props) {
    // get the context of 'this'
    super(props);
    this.firebaseRef = new Firebase('https://appshoppinglist.firebaseio.com/items/');

    this.state = {
      items: [
        {
          id: uuid.v4(),
          body: "Learn React",
        },
        {
          id: uuid.v4(),
          body: "Learn it well",
        },
        {
          id: uuid.v4(),
          body: "Learn it now",
        }
      ]
    };
  }

  render() {
    const items = this.state.items;

    return (
     <div>
        <button onClick={this.addItem}>+</button>
        <Items 
          items={items} 
          onEdit={this.editItem}
          onDelete={this.deleteItem}
          onComplete={this.completeItem}
        />
      </div>
    ); 
  } 

  addItem = () => {
    this.setState({
      items: this.state.items.concat([{
        id: uuid.v4(),
        body: 'New Item'
      }])
    });
  };

  editItem = (id, item) => {
    if(!item.trim()) {
      return;
    }
    const items = this.state.items.map(item => {
      if (item.id === id && body) {
        item.body = body;
      }
      return item;
    });
    this.setState({items});
  };

  deleteItem = (id, event) => {
    // Avoid bubbling to edit
    event.stopPropagation();

    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  };
}
