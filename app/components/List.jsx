import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Items from './Items'
import Editor from './Editor'
import * as listActionCreators from '../actions/lists'
import * as itemActionCreators from '../actions/items'
import Modal from './Modal'
import ItemForm from './ItemForm'
import uuid from 'node-uuid'
import { reset, initialize } from 'redux-form'

export class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isModalOpen: false
    }

    this.resetFrom = this.resetForm.bind(this)
  }

  toggleModal () {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  }

  deleteList (listId, e) {
    e.stopPropagation()

    this.props.listActions.deleteList(listId)
  }

  resetForm () {
    this.props.reset('items')
  }

  createItem (item) {
    let items = {
      id: uuid.v4(),
      sku: item.sku,
      text: item.text,
      price: item.price
    }

    this.props.itemActions.createItem(items)
    this.props.listActions.connectToList(this.props.list.id, items.id)
    this.resetForm()
  }

  populateForm (item) {
    const { id, sku, text, price } = item
    this.props.dispatch(initialize('items', {
      id, sku, text, price
    }, ['id', 'sku', 'text', 'price']))
  }

  deleteItem(listId, itemId) {
    this.props.listActions.disconnectFromList(listId, itemId)
    this.props.itemActions.deleteItem(itemId)
  }

  render () {
    const { list, ...props } = this.props
    const listId = list.id

    return (
      <div {...props}>
        <div className='list-add-item'>
          <button onClick={this.toggleModal.bind(this)}>+</button>
        </div>

        <div className='list-header'
          onClick={() => props.listActions.updateList({id: listId, isEditing: true})} >

          <Editor
            className='list-title'
            isEditing={list.isEditing}
            value={list.title}
            onEdit={(title) => props.listActions.updateList({id: listId, title, isEditing: false})}>
          </Editor>

          <div className='list-delete'>
            <button onClick={this.deleteList.bind(this, listId)}>x</button>
          </div>
        </div>

        <Items
          items={props.listItems}
          populateForm={(item) => this.populateForm(item)}
          openModal={this.toggleModal.bind(this)}
          onDelete={(itemId) => this.deleteItem(listId, itemId)}>
        </Items>

        <Modal
          className='list-add-item'
          openModal={this.state.isModalOpen}>
          <ItemForm
            onEdit={this.props.itemActions.updateItem}
            onSubmit={this.createItem.bind(this)}>
          </ItemForm>
        </Modal>
      </div>
    )
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
    itemActions: bindActionCreators(itemActionCreators, dispatch),
    reset: bindActionCreators(reset, dispatch),
    dispatch: bindActionCreators(dispatch, dispatch)
  }
}

const { string, arrayOf, shape } = React.PropTypes

List.propTypes = {
  lists: arrayOf(shape({
    id: string.isRequired,
    title: string.isRequired
  }).isRequired)
}

export default connect(mapStateToProps, mapDispatchToProps)(List)
