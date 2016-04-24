import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as listActionCreators from '../actions/lists'
import * as itemActionCreators from '../actions/items'
import * as modalActionCreators from '../actions/modal'
import { reset, initialize } from 'redux-form'
import Items from './Items'
import Editor from './Editor'
import Modal from './Modal'
import ItemForm from './ItemForm'
import uuid from 'node-uuid'

export class List extends React.Component {
  constructor(props) {
    super(props)

    this.resetFrom = this.resetForm.bind(this)
    this.createItem = this.createItem.bind(this)
  }

  deleteList (listId, e) {
    e.stopPropagation()

    this.props.listActions.deleteList(listId)
    this.props.modalActions.closeModal()
  }

  resetForm () {
    this.props.reset('items')
  }
  
  createItem (item) {
    let items = {
      id: uuid.v4(),
      sku: item.sku,
      text: item.text,
      price: item.price,
      checked: item.checked
    }

    this.props.itemActions.createItem(items)
    this.props.listActions.connectToList(this.props.list.id, items.id)
    this.resetForm()
    this.props.modalActions.closeModal()
  }

  populateForm (item) {
    const { id, sku, text, price } = item
    this.props.dispatch(initialize('items', {
      id, sku, text, price
    }, ['id', 'sku', 'text', 'price']))
    this.props.modalActions.openModal()
  }

  deleteItem(listId, itemId) {
    this.props.listActions.disconnectFromList(listId, itemId)
    this.props.itemActions.deleteItem(itemId)
  }

  checkItem(id) {
    this.props.itemActions.checkItem(id)
  }

  total() {
    return this.props.listItems.reduce((prev, item) => {
      return prev + parseFloat(item.price)
    }, 0)
  }

  render () {
    const { list, listItems, isModalOpen, ...props } = this.props
    const { updateList, deleteList } = this.props.listActions
    const { updateItem } = this.props.itemActions
    const { openModal, closeModal } = this.props.modalActions
    const listId = list.id

    return (
      <div {...props}>
        <div className="header-wrapper">
          <div className='list-add-item-wrapper'>
            <button className="btn list-add-item-button" onClick={openModal.bind(this, listId)}>+</button>
          </div>

          <div className='list-header'
            onClick={() => updateList({id: listId, isEditing: true})} >

            <Editor
              className='list-title'
              isEditing={list.isEditing}
              value={list.title}
              onEdit={(title) => updateList({id: listId, title, isEditing: false})}>
            </Editor>

            <div className='list-delete'>
              <button className='btn' onClick={this.deleteList.bind(this, listId)}>x</button>
            </div>
          </div>
        </div>

        <div className="total">{this.total()}</div>

        <Items
          items={listItems}
          populateForm={(item) => this.populateForm(item)}
          onDelete={(itemId) => this.deleteItem(listId, itemId)}
          onCheck={(id) => this.checkItem(id)}>
        </Items>

        <Modal
          className='list-add-item'
          openModal={isModalOpen}>
          <ItemForm
            onEdit={updateItem}
            closeModal={closeModal}
            onSubmit={this.createItem}>
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
    ]).filter((item) => item),
    isModalOpen: state.modal.isOpen
  }
}

function mapDispatchToProps (dispatch) {
  return {
    listActions: bindActionCreators(listActionCreators, dispatch),
    itemActions: bindActionCreators(itemActionCreators, dispatch),
    modalActions: bindActionCreators(modalActionCreators, dispatch),
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
