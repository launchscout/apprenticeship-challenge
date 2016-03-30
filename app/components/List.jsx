import React from 'react';
import {connect} from 'react-redux';
import Items from './Items.jsx';
import * as listActions from '../actions/lists';
import createItem from '../actions/items';

export default class List extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.addItem.bind(this, listId)}>+</button>
        <Items />
      </div>
    )
  }
  addItem(listId, event) {
    event.stopPropagation()

    const stuff = this.props.createItem({
      text: "New Shopping Item"
    })
    this.props.joinToList(listId, stuff.item.id);
  }
}
