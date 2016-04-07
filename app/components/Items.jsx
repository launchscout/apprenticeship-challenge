import React from 'react'
import Editor from './Editor'
import Item from './Item'

export default class Items extends React.Component {
  render () {
    const {items, onEdit, onDelete, onValueClick, onCheck} = this.props

    return (
      <ul className='items'>{items.map((item) =>
        <Item
          className='item'
          key={item.id}
          id={item.id}>
          <Editor
            item={item.checked}
            isEditing={item.isEditing}
            value={item.text}
            onValueClick={onValueClick.bind(null, item.id)}
            onEdit={onEdit.bind(null, item.id)}
            onDelete={onDelete.bind(null, item.id)}
            onCheck={onCheck.bind(null, item.id)}
          />
        </Item>
      )}</ul>
    )
  }
}

const { string, bool, func, arrayOf, shape} = React.PropTypes

Items.propTypes = {
  items: arrayOf(shape({
    id: string.isRequired,
    text: string.isRequired,
    checked: bool.isRequired
  }).isRequired).isRequired,
  onEdit: func.isRequired,
  onDelete: func.isRequired,
  onValueClick: func.isRequired,
  onCheck: func.isRequired
}
