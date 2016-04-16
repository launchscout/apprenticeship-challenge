import React from 'react'
import Editor from './Editor'
import Item from './Item'

export default class Items extends React.Component {
  render () {
    const {items, onEdit, ...props} = this.props

    console.log("ITEMS PROPS>>", props)
    return (
      <ul className='items'>{items.map((item) =>
        <Item
          className='item'
          key={item.id}
          id={item.id}
          sku={item.sku}
          text={item.text}
          price={item.price}>
        </Item>
      )}</ul>
    )
  }
}

// const { string, bool, func, arrayOf, shape} = React.PropTypes

// Items.propTypes = {
  // items: arrayOf(shape({
    // id: string.isRequired,
    // text: string.isRequired,
    // checked: bool.isRequired
  // }).isRequired).isRequired,
  // onEdit: func.isRequired,
  // onDelete: func.isRequired,
  // onValueClick: func.isRequired,
  // // onCheck: func.isRequired
// }
