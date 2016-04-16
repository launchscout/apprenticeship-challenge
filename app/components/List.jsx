import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Items from './Items'
import Editor from './Editor'
import * as listActionCreators from '../actions/lists'
import * as itemActionCreators from '../actions/items'
import Modal from './Modal'
import ItemForm from './ItemForm'

export class List extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isModalOpen: false
    }
  }

  toggleModal () {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  }
  
  deleteList (listId, e) {
    e.stopPropagation()

    this.props.listActions.deleteList(listId)
  }

  render () {
    const { list, ...props } = this.props
    const listId = list.id

    return (
      <div {...props}>
        <div className='list-add-item'>
          <button onClick={this.toggleModal.bind(this, listId)}>+</button>
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

        <Items items={props.listItems} />

        <Modal 
          className='list-add-item'
          openModal={this.state.isModalOpen}>
          <ItemForm 
            itemActions={this.props.itemActions} 
            listActions={this.props.listActions} 
            listId={listId}
          />
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
    itemActions: bindActionCreators(itemActionCreators, dispatch)
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
