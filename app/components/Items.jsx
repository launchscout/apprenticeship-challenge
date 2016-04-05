import React from 'react'
import { connect } from 'react-redux'
import Editor from './Editor'
import Item from './Item'

export default class Items extends React.Component {
  render () {
    const {items, onEdit, onDelete, onValueClick, isEditing} = this.props

    return (
      <ul className="items">{items.map(item =>
        <Item 
          className="item"
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
