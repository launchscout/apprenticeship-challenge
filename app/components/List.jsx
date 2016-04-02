import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Items from './Items'
import Editor from './Editor'
import * as listActionCreators from '../actions/lists'
import * as itemActionCreators from '../actions/items'

//////////////////////////////////////////////////////////////////////////
// Start on list
//////////////////////////////////////////////////////////////////////////

export default class List extends React.Component {
  render() {
    const { list, listItems, updateList, ...props } = this.props
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
          items={listItems}
          onValueClick={id => props.updateItem({id, isEditing: true})}
          onEdit={(id, text) => props.updateItem({id, text, isEditing: false})}
          onDelete={id => this.deleteItem(listId, id)}
        />
      </div>
    )
  }

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
    this.props.disconnectFromList(listId, itemId)
    this.props.deleteItem(listId)
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
