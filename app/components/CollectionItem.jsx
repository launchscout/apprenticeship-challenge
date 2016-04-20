import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';

export default class GList extends React.Component {
  constructor(props){
    super(props);
    this.updateItem = this.updateItem.bind(this);
  }
  updateItem(){
    this.props.updateItem(this.props.fbRef, this.props.list.key)
  }

  render(){
    return (
      <ListItem onClick={this.updateItem}>
        {this.props.list.name}
      </ListItem>
    )
  }
};
