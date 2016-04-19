import React from 'react';
import GroceryItem from './GroceryItem.jsx';
import GroceryInput from './GroceryInput.jsx';
import Card from 'material-ui/lib/card/card';
import List from 'material-ui/lib/lists/list';
import Firebase from 'firebase';
import _ from 'lodash';

export default class GroceryList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      groceryItems: {}
    };

    this.baseRef = 'https://gaslightchallenge.firebaseio.com/list'
    this.firebaseRef = new Firebase(this.baseRef);
    //read list from firebase
    this.firebaseRef.on("child_added", (item)=> {
      let itemVal = item.val();
      itemVal.key = item.key();
      this.state.groceryItems[itemVal.key] = itemVal;
      this.setState({groceryItems: this.state.groceryItems});
    });
    //check for removed item in firebase
    this.firebaseRef.on("child_removed", (item)=> {
      let key = item.key();
      delete this.state.groceryItems[key];
      this.setState({groceryItems: this.state.groceryItems});
    });
    //check for changed item in firebase
    this.firebaseRef.on('child_changed', (item)=> {
      let itemVal = item.val();
      itemVal.key = item.key();
      this.state.groceryItems[itemVal.key] = itemVal;
      this.setState({groceryItems: this.state.groceryItems});
    });

    //extra binding to use with es6 classes
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem (ref, key){
    let newRef = new Firebase(`${ref}/${key}`);
    newRef.set(null);
  };

  render(){
    let that = this;
    let itemNodes = _.values(this.state.groceryItems).map((item)=> {
      return (
        <GroceryItem
          fbRef={that.baseRef}
          key={item.key} //resolves error
          item={item}
          deleteMe={that.deleteItem} />
      );
    });

    return (
      <div>
        <GroceryInput />
        <Card>
          <List>{itemNodes}</List>
        </Card>
      </div>
    );
  }
};
