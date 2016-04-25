import React from 'react';
import Card from 'material-ui/lib/card/card';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import Firebase from 'firebase';

export default class GroceryInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      sku: '',
      price: ''
    }
    this.firebaseRef = new Firebase(this.props.fbRef);
  }

  componentWillReceiveProps(next){
    this.firebaseRef = new Firebase(next.fbRef);
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
      <Card style={{
        margin: '15px auto',
        padding: 15,
        textAlign: 'center'
      }}>
        <TextField
          value={this.state.name}
          onChange={this.nameChange.bind(this)}
          placeholder='Name'
          style={{
            width: '25%',
            marginLeft: '1%',
            marginRight: '1%',
            borderColor: '#D0D0D0',
            borderRadius: 3,
            minHeight: 30,
            color: '#555',
            fontSize: 16
          }} />
        <TextField
          value={this.state.sku}
          onChange={this.skuChange.bind(this)}
          placeholder='Sku'
          style={{
            width: '25%',
            marginLeft: '1%',
            marginRight: '1%',
            borderColor: '#D0D0D0',
            borderRadius: 3,
            minHeight: 30,
            color: '#555',
            fontSize: 16
          }} />
        <TextField
          value={this.state.price}
          onChange={this.priceChange.bind(this)}
          placeholder='Price'
          style={{
            width: '25%',
            marginLeft: '1%',
            marginRight: '1%',
            borderColor: '#D0D0D0',
            borderRadius: 3,
            minHeight: 30,
            color: '#555',
            fontSize: 16
          }} />
        <RaisedButton label="Submit" onClick={this.submit.bind(this)} />
      </Card>
    )
  }
};
