// import React from 'react';
// import Item from './Item.jsx';
// import { connect } from 'react-redux'
// import * as actions from '../actions/items'

//////////////////////////////////////////////////////////////////
// Working Items
//////////////////////////////////////////////////////////////////
// export default class Items extends React.Component {

  // handleOnEdit = (id, text) => {
    // this.props.dispatch(actions.updateItem(id, text))
  // }

  // handleOnDelete = (id) => {
    // this.props.dispatch(actions.deleteItem(id))
  // }

  // render() {
    // const {items, onEdit, onDelete} = this.props

    // return (
      // <ul>{items.map(item =>
        // <li key={item.id}>
          // <Item
            // id={item.id}
            // text={item.text}
            // onEdit={this.handleOnEdit}
            // onDelete={this.handleOnDelete.bind(null, item.id)}
          // />
        // </li>
      // )}</ul>
    // );
  // }
// }

// export default connect(
  // state => ({
    // items: state.items
  // })
// )(Items)

///////////////////////////////////////////////////////////////////
//  Items-list stuff
///////////////////////////////////////////////////////////////////

import React from 'react';
import { connect } from 'react-redux'
import Editor from './Editor'
import Item from './Item';

export default class Items extends React.Component {
  render () {
    const {items, onEdit, onDelete, onValueClick, isEditing} = this.props

    return (
      <ul>{items.map(item =>
        <Item 
          key={item.id}
          id={item.id}
          isEditing={item.isEditing}>
          <Editor
            isEditing={item.isEditing}
            value={item.text}
            onValueClick={onValueClick.bind(null, item.id)}
            onEdit={onEdit.bind(null, item.id)}
            onDelete={onDelete.bind(null, item.id)}
          />
        </Item>
      )}</ul>
    )
  }
}

export default connect(
  state => ({
    items: state.items
  })
)(Items)
