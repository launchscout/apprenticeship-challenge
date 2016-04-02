import React from 'react';
import uuid from 'node-uuid';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: uuid.v4(),
          selection: 'dog food'
        },
        {
          id: uuid.v4(),
          selection: 'apples'
        },
        {
          id: uuid.v4(),
          selection: 'work on pj'
        }
      ]
    };
  }

  render() {
    const items = this.state.items;

    return (
      <div>
        <button onClick={this.addItem}>Add Item</button>
        <ul>{items.map(item =>
          <li key={item.id}>{item.selection}</li>
        )}</ul>
      </div>
    );
  }

  addItem = () => {
    this.setState({
      items: this.state.items.concat([{
        id: uuid.v4(),
        selection: "New Item"
      }])
    });
  }


}
