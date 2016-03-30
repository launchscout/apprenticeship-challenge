// import React from 'react';
// import Item from './Item.jsx';
// import { connect } from 'react-redux'

// export default ({}) syntax === function parameter
// const Items = ({items, onEdit, onDelete}) => {
  // return (
    // <ul>{items.map(item =>
     // <li key={item.id}>
       // <Item 
         // text={item.text}
       // />
     // </li>
   // )}</ul>
  // );
// }

// export default connect(
  // state => ({
    // items: state.items
  // })
// )(Items)

// export default class Items extends React.Component {
  // constructor(props) {
    // super(props);

    // this.renderItem = this.renderItem.bind(this);
  // }
  // render() {
    // const items = this.props.items || [];

    // return <ul>{items.map(this.renderItem)}</ul>;
  // }
  // renderNote(note) {
    // return (
      // <Item id={item.id} key={`item{item.id}`}
          // value={item.text}
          // onEdit={this.props.onEdit.bind(null, item.id)}
          // onDelete={this.props.onDelete.bind(null, item.id)}
      // />
    // );
  // }
// }


import React from 'react';
import Item from './Item.jsx';
import { connect } from 'react-redux'
import { store } from '../stores/store'

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
