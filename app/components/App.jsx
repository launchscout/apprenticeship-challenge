import uuid from 'node-uuid';
import React from 'react';
import Table from './Table.jsx'

export default React.createClass({

  getInitialState() {
    return {
      newItem: '',
      newPrice: 0,
      list: [
        {
          item: 'Milk',
          sku: uuid.v4(),
          price: 2.00
        },
        {
          item: 'Eggs',
          sku: uuid.v4(),
          price: 1.50

        },
         {
          item: 'Orange Juice',
          sku: uuid.v4(),
          price: 3.00
        }
      ]
    }
  },

  updateName (event) {
    this.setState({newItem: event.target.value})
  },

  updatePrice (event) {
    this.setState({newPrice: Number(event.target.value)})
  },

  render(){
    return (
      <div>
        <Table rowList={this.state.list} removeItem={this.removeItem} />

        <form id="add-form" onSubmit={this.handleSubmit}>
          <input type='text' placeholder='Item Name' onChange={this.updateName} />
          <input type='text' placeholder= 'Price' onChange={this.updatePrice} />
          <button className='button' onClick={this.addItem}>+</button>
        </form>

      </div>
    );
  },

  addItem () {
    this.setState({
      list: this.state.list.concat([{
        item: this.state.newItem,
        sku: uuid.v4(),
        price: this.state.newPrice
      }])
    });
  },

  removeItem (givenSku) {
    var updatedList = this.state.list.filter(row =>
      row.sku !== givenSku
    )

    this.setState({
      list:  updatedList
    })
  }
})
