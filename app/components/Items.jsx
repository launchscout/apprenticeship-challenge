import React from 'react';
import Item from './Item.jsx';
import { connect } from 'react-redux'
import Editor from './Editor'

// export default ({}) syntax === function parameter
const Items = ({items, onEdit, onDelete}) => {
  return (
    <ul>{items.map(item =>
      <li key={item.id}>
        <Item
          text={item.text}
        />
      </li>
   )}</ul>
  );
}

export default connect(
  state => ({
    items: state.items
  })
)(Items)

///////////////////////////////////////////////////////////////////
//  Items stuff
///////////////////////////////////////////////////////////////////

// import React from 'react';
// import { connect } from 'react-redux'
// import Editor from './Editor'
// import Item from './Item';
// import { store } from '../stores/store'

// export default class Items extends React.Component {
  // render () {
    // const {items, onEdit, onDelete, onValueClick} = this.props

    // return (
      // <ul>{items.map(item =>
        // <Item 
          // key={item.id}
          // id={item.id}
          // isEditing={item.isEditing}>
          // <Editor
            // isEditing={item.isEditing}
            // value={item.text}
            // onValueClick={onValueClick.bind(null, item.id)}
            // onEdit={onEdit.bind(null, item.id)}
            // onDelete={onDelete.bind(null, item.id)}
          // />
        // </Item>
      // )}</ul>
    // )
  // }
// }

// export default connect(
  // state => ({
    // items: state.items
  // })
// )(Items)
