import React from 'react';
import ListItem from 'material-ui/lib/lists/list-item';
import Menu from 'material-ui/lib/menus/menu';
import MenuItem from 'material-ui/lib/menus/menu-item';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import FontIcon from 'material-ui/lib/font-icon';

export default class CollectionItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      edit: false
    }
    this.updateItem = this.updateItem.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.showEdit = this.showEdit.bind(this);
  }
  updateItem(e){
    if(e.keyCode === 13 && e.target.value != ''){
      this.props.updateItem(this.props.fbRef, this.props.list.key, this.state.name);
      this.setState({edit: !this.state.edit});
    }
  }

  onChange(e){
    this.setState({
      name: e.target.value
    });
  }

  handleClose(){
    this.props.selectList(this.props.list.key);
    // this.props.handleClose();
  }

  showEdit(){
    this.setState({edit: !this.state.edit});
  }

  render(){
    return (
      <div>
        <MenuItem
          primaryText={this.props.list.name}
          onTouchTap={this.handleClose.bind(this)}
          rightIcon={<FontIcon
            className="material-icons"
            onClick={this.showEdit.bind(this)}>create</FontIcon>}
          style={{
            margin: 5,
            minHeigh: 30,
            fontSize: 16
          }} />
          <TextField
            value={this.state.name}
            onChange={this.onChange.bind(this)}
            placeholder={this.props.list.name}
            onKeyUp={this.updateItem.bind(this)}
            style={{
              width: '75%',
              margin: 'auto',
              borderColor: '#D0D0D0',
              borderRadius: 3,
              minHeight: 30,
              color: '#555',
              fontSize: 16,
              display: this.state.edit ? 'block':'none'
            }} />
      </div>
    )
  }
};
