import React from 'react';
import GroceryList from './GroceryList.jsx';
import GLists from './GLists.jsx';
import AppBar from 'material-ui/lib/app-bar';

export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      selectedItem: 'default'
    }
    this.selectList = this.selectList.bind(this);
  }
  selectList (key){
    this.setState({selectedItem: key});
  }
  render() {
    return (
      <div>
        <AppBar />
        <GroceryList selectedList={this.state.selectedItem} />
        <GLists selectList={this.selectList} />
      </div>
    );
  }
};
