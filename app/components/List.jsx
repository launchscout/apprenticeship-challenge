import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Items from './Items'
import Editor from './Editor'
import * as listActionCreators from '../actions/lists'
import * as itemActionCreators from '../actions/items'

export default class List extends React.Component {
  render () {
    const { list, ...props } = this.props
    const listId = list.id

    return (
      <div {...props}>
        <div className='list-header'
          onClick={() => props.listActions.updateList({id: listId, isEditing: true})}
        >
          <div className='list-add-item'>
            <button onClick={this.addItem.bind(this, listId)}>+</button>
          </div>
          <Editor
            className='list-title'
            isEditing={list.isEditing}
            value={list.title}
            onEdit={(title) => props.listActions.updateList({id: listId, title, isEditing: false})}
          />
          <div className='list-delete'>
            <button onClick={this.deleteList.bind(this, listId)}>x</button>
          </div>
        </div>
        <Items
          items={props.listItems}
          onValueClick={(id) => props.itemActions.updateItem({id, isEditing: true})}
          onEdit={(id, text) => props.itemActions.updateItem({id, text, isEditing: false})}
          onDelete={(id) => this.deleteItem(listId, id)}
          onCheck={(id) => this.checkItem(id)}
        />
      </div>
    )
  }

  checkItem (id) {
    this.props.itemActions.checkItem(id)
  }

  deleteList (listId, e) {
    e.stopPropagation()

    this.props.listActions.deleteList(listId)
  }

  addItem (listId, event) {
    event.stopPropagation()

    const items = this.props.itemActions.createItem({
      text: 'New Shopping Item',
      checked: false
    })
    this.props.listActions.connectToList(listId, items.item.id)
  }

  deleteItem (listId, itemId) {
    this.props.listActions.disconnectFromList(listId, itemId)
    this.props.itemActions.deleteItem(itemId)
  }
}

function mapStateToProps (state, props) {
  return {
    lists: state.lists,
    listItems: props.list.items.map((id) => state.items[
        state.items.findIndex((item) => item.id === id)
      ]).filter((item) => item)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    listActions: bindActionCreators(listActionCreators, dispatch),
    itemActions: bindActionCreators(itemActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
