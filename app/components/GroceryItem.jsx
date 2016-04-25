import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';

export default class GroceryItem extends React.Component {
  constructor(props){
    super(props);
    this.deleteMe = this.deleteMe.bind(this);
  }
  deleteMe(){
    this.props.deleteMe(this.props.fbRef, this.props.item.key);
  }

  render(){
    return (
      <ListItem
        onClick={this.deleteMe}
        style={{
          margin: 5,
          minHeigh: 30,
          fontSize: 16
        }}>
        Name: {this.props.item.name}, Sku: {this.props.item.sku}, Price: {this.props.item.price} <span style={{color: '#808080'}}>Click Me to Delete Me</span>
      </ListItem>
    );
  }
};
