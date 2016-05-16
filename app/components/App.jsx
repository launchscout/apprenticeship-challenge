import uuid from 'node-uuid';
import React from 'react';

import Table from './Table.jsx'

export default React.createClass({

  getInitialState() {
    return {
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
    }
  },

  render(){
    return (
      <div>
        <button onClick={this.addItem}>+</button>
        <form id="add-form" onSubmit={this.handleSubmit}>
          <input id='create' ref="description" type='text' placeholder='Item Name'/>
          <input id='create' ref="description" type='text' placeholder='SKU'/>
          <input id='create' ref="description" type='text' placeholder= 'Price'/>
    </form>
        <Table rowList={this.state.list}/>
      </div>
    );
  },

  addItem () {
    this.setState({
      list: this.state.list.concat([{
        item: 'New item',
        sku: uuid.v4(),
        price: 0
      }])
    });
  }
})
