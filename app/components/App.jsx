import React from 'react';
import GroceryList from './GroceryList.jsx';
import AppBar from 'material-ui/lib/app-bar'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <AppBar />
        <GroceryList />
      </div>
    );
  }
};
