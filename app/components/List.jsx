// import React from 'react'
// import {connect} from 'react-redux'
// import Items from './Items'
// import Editor from './Editor'
// import * as listActions from '../actions/lists';
// import * as itemActions from '../actions/items';

// class List extends React.Component {
  // handleUpdateClick = () => {
    // this.props.updateLit({id: listId, isEditing: true})
  // }
  
  // handleAddItem = () => {
    // this.props.addItem(listId)
  // }

  // handleDeleteList = () => {
    // this.props.deleteList(listId)
  // }

  // deleteList(listId, e) {
    // e.stopPropagation();

    // this.props.deleteList(listId);
  // }

  // addItem(listId, e) {
    // e.stopPropagation();

    // const o = this.props.createItem({
      // task: 'New Shopping Item'
    // });
    // this.props.connectToList(listId, o.item.id);
  // }

  // deleteItem(listId, itemId) {
    // this.props.disconnectFromList(listId, itemId);
    // this.props.deleteItem(itemId);
  // }

  // render() {
    // const {list, listItems, ...props} = this.props
    // const listId = list.id

    // console.log("listItem>>>>", listItem)
    // return (
      // <div {...props}>
        // <div
          // onClick={this.handleUpdateClick}>
          // <div>
            // <button onClick={this.handleAddItem}>+</button>
          // </div>
          // <Editor isEditing={list.isEditing}
            // value={list.title}
            // onEdit={title => props.updateList({id: listId, title, isEditing: false})} 
          // />
          // <div>
            // <button onClick={this.handleDeleteList}>x</button>
          // </div>
        // </div>
        // <Items
          // items={listItems}
          // onValueClick={id => props.updateItem({id, isEditing: true})}
          // onEdit={(id, task) => props.updateItem({id, task, isEditing: false})}
          // onDelete={id => this.deleteItem(listId, id)}
        // />
      // </div>
    // );
  // }
// }

// function mapStateToProps(state) {
  // return {
    // lists: state.lists,
    // items: state.items
  // }
// }

// export default connect(mapStateToProps)(App)

