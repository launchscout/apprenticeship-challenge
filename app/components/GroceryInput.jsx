import React from 'react';
import Card from 'material-ui/lib/card/card';
import RaisedButton from 'material-ui/lib/raised-button';
import Firebase from 'firebase';

export default class GroceryInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      sku: '',
      price: ''
    }
    this.firebaseRef = new Firebase('https://gaslightchallenge.firebaseio.com/list');
  }

  nameChange(e){
    this.setState({
      name: e.target.value
    });
  }

  skuChange(e){
    this.setState({
      sku: e.target.value
    });
  }

  priceChange(e){
    this.setState({
      price: e.target.value
    });
  }

  submit(){
    if(this.state.name && this.state.sku && this.state.price){
      let finishedItem = {
        name: this.state.name,
        sku: this.state.sku,
        price: this.state.price
      }
      this.firebaseRef.push(finishedItem);

      this.setState({
        name: '',
        sku: '',
        price: ''
      });
    }else {
      alert("Please fill out form");
    }
  }

  render(){
    return (
      <Card>
        <input
          value={this.state.name}
          onChange={this.nameChange.bind(this)}
          placeholder='Name' />
        <input
          value={this.state.sku}
          onChange={this.skuChange.bind(this)}
          placeholder='Sku' />
        <input
          value={this.state.price}
          onChange={this.priceChange.bind(this)}
          placeholder='Price' />
        <button onClick={this.submit.bind(this)}>Submit</button>
      </Card>
    )
  }
};
