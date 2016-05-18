import uuid from 'node-uuid';
import React from 'react';
import Table from './Table.jsx';
import Title from './Title.jsx';
import Form from './Form.jsx';

export default React.createClass({

  getInitialState() {
    return {
      newItem: '',
      newPrice: 0,
      list: [
        {
          item: 'Milk',
          sku: uuid.v4(),
          price: "$2.00",
          sellBy: '1/1/11'
        },
        {
          item: 'Eggs',
          sku: uuid.v4(),
          price: "$1.50",
          sellBy: '1/1/11'
        },
         {
          item: 'Orange Juice',
          sku: uuid.v4(),
          price: "$3.00",
          sellBy: '1/1/11'
        }
      ]
    };
  },

  updateName (event) {
    this.setState({newItem: event.target.value});
  },

  updatePrice (event) {
    this.setState({newPrice: Number(event.target.value)});
  },

  addItem () {
    var updatedList = this.state.list
    updatedList.push({
      item: this.state.newItem,
      sku: uuid.v4(),
      price: this.state.newPrice
    });

    this.setState({
      list: updatedList
    });
  },

  removeItem (givenSku) {
    var updatedList = this.state.list.filter(row =>
      row.sku !== givenSku
    );

    this.setState({
      list: updatedList
    });
  },

  render(){
    return (
      <div>
        <Title />
        <Table rowList={this.state.list} removeItem={this.removeItem} />
        <Form
          updateName={this.updateName}
          updatePrice={this.updatePrice}
          addItem={this.addItem}
        />
      </div>
    );
  }
});