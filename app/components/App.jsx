import uuid from 'node-uuid';
import React from 'react';
// import Item from './Item.jsx';
import Items from './Items.jsx';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: uuid.v4(),
          name: 'dog food'
        },
        {
          id: uuid.v4(),
          name: 'apples'
        },
        {
          id: uuid.v4(),
          name: 'work on pj'
        }
      ]
    };
  }

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
    // Avoid bubbling to edit
    e.stopPropagation();

    this.setState({
      items: this.state.items.filter(item => item.id !== id)
    });
  };

  addItem = () => {
    this.setState({
      items: this.state.items.concat([{
        id: uuid.v4(),
        name: "New Item"
      }])
    });
  };

  editItem = (id, name) => {
    if(!name.trim()) {
      return;
    }

    const items = this.state.items.map(item => {
      if(item.id === id && name) {
        item.name = name
      }
      return item;
    });

    this.setState({items});
  };



}
