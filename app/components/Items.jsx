import React from 'react';
import Item from './Item.jsx';
import { connect } from 'react-redux'

// export default ({}) syntax === function parameter
const Items = ({items, onEdit, onDelete}) => {
  console.log(items, "<<<items")
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
