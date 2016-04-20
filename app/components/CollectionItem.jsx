import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';

export default class GList extends React.Component {
  constructor(props){
    super(props);
    this.updateItem = this.updateItem.bind(this);
    this.selectList = this.selectList.bind(this);
  }
  updateItem(){
    // this.props.updateItem(this.props.list.key)
  }

  selectList(){
    this.props.selectList(this.props.list.key)
  }

  render(){
    return (
      <ListItem onClick={this.selectList.bind(this)}>
        {this.props.list.name}
      </ListItem>
    )
  }
};
