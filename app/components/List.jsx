import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Items from './Items'
import Editor from './Editor'
import * as listActionCreators from '../actions/lists'
import * as itemActionCreators from '../actions/items'

export default class List extends React.Component {
  render() {
    const { list, updateList, ...props } = this.props
    const listId = list.id

    return (
      <div {...props}>
        <div onClick={() => props.listActions.updateList({id: listId, isEditing: true})}>
          <div>
            <button onClick={this.addItem.bind(this, listId)}>AddItem</button>
          </div>
          <Editor isEditing={list.isEditing}
            value={list.title}
            onEdit={title => props.listActions.updateList({id: listId, title, isEditing: false})} 
          />
          <div>
            <button onClick={this.deleteList.bind(this, listId)}>DeleteList</button>
          </div>
        </div>
        <Items
          {/*}items={this.listItems} NOT WORKING */}
          onValueClick={id => props.itemActions.updateItem({id, isEditing: true})}
          onEdit={(id, text) => props.itemActions.updateItem({id, text, isEditing: false})}
          onDelete={itemId => this.deleteItem(listId, itemId)}
        />
      </div>
    )
  }

  // listItems() {
    // props.list.items.map(id => state.items[
      // state.items.findIndex(item => item.id === id)
    // ]).filter(item => item)
  // }

  deleteList(listId, e) {
    e.stopPropagation()

    this.props.listActions.deleteList(listId)
  } 

  addItem(listId, event) {
    event.stopPropagation()

    const item = this.props.itemActions.createItem({
      text: 'New Shopping Item'
    })

    this.props.listActions.connectToList(listId, item.id)
  }

  deleteItem(listId, itemId) {
    this.props.listActions.disconnectFromList(listId, itemId)
    this.props.itemActions.deleteItem(itemId)
  }
}

function mapStateToProps(state) {
  return {
    lists: state.lists,
    items: state.items
  }
}

function mapDispatchToProps(dispatch) {
  return {
    listActions: bindActionCreators(listActionCreators, dispatch),
    itemActions: bindActionCreators(itemActionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
