import React from 'react';
import GroceryItem from './GroceryItem.jsx';
import Card from 'material-ui/lib/card';
import List from 'material-ui/lib/list';

export default class GroceryList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      groceryItems: {}
    };
  }

  render(){
    var groceryItemNodes =
    return (
      <Card>
        <List>{groceryItemNodes}</List>
      </Card>
    );
  }
};