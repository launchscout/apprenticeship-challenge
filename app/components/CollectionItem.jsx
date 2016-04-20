import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';

export default class GList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
    this.updateItem = this.updateItem.bind(this);
    this.selectList = this.selectList.bind(this);
  }
  updateItem(){
    this.props.updateItem(this.props.fbRef, this.props.list.key, this.state.name);
  }

  onChange(e){
    this.setState({
      name: e.target.value
    });
  }

  selectList(){
    this.props.selectList(this.props.list.key)
  }

  render(){
    return (
      <div>
      <ListItem onClick={this.selectList.bind(this)}>
        {this.props.list.name}

      </ListItem>
      <input
        value={this.state.name}
        onChange={this.onChange.bind(this)}
        placeholder={this.props.list.name} />
      <button onClick={this.updateItem.bind(this)}>EditName</button>
      </div>
    )
  }
};
