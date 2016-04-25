import React from 'react';
import GroceryList from './GroceryList.jsx';
import Collections from './Collections.jsx';
import AppBar from 'material-ui/lib/app-bar';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      selectedItem: 'default',
      open: false
    }
    this.selectList = this.selectList.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.onRequestChange = this.onRequestChange.bind(this);
  }

  selectList (key){
    this.setState({selectedItem: key});
  }

  handleToggle (){
    this.setState({open: !this.state.open});
  }

  handleClose (){
    this.setState({open: false});
  }

  onRequestChange(){
    this.setState({open: false});
  }

  render() {
    return (
      <div>
        <AppBar
          title="Grocery List App"
          onLeftIconButtonTouchTap={this.handleToggle} />
        <GroceryList selectedList={this.state.selectedItem} />
        <Collections
          selectList={this.selectList}
          open={this.state.open}
          handleClose={this.handleClose}
          onRequestChange={this.onRequestChange} />
      </div>
    );
  }
};
