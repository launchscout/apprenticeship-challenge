import uuid from 'node-uuid';
import React from 'react';

import List from './List.jsx';


export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      list: [
      {
        item: 'milk',
        sku: uuid.v4(),
        price: 2.00
      },
      {
        item: 'eggs',
        sku: uuid.v4(),
        price: 1.50

      },
       {
        item: 'oj',
        sku: uuid.v4(),
        price: 3.00
      }
    ]
  };
}


  render(){
    const list = this.state.list;

    return (
      <div>
        <button onClick={this.addItem}>+</button>
        <ul>
          {list.map(list =>
            <li key={list.sku}>
              <List item='thing' sku={list.sku} price={list.price} />
            </li>
          )}
        </ul>
      </div>
    );
  }
  addItem = () => {
    this.setState({
      list: this.state.list.concat([{
        item: 'New item',
        sku: uuid.v4(),
        price: 0
      }])
    });
  };
}