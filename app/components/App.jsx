// import React from 'react'
// // import Lists from './Lists';
// import Items from './Items'
// import { connect } from 'react-redux'
// // import * as actions from '../actions/lists'
// import * as actions from '../actions/items'
// import Rebase from 're-base';

// const base = new Rebase.createClass('https://appshoppinglist.firebaseio.com/items/');

// class App extends React.Component {
  // handleClick = () => {
    // this.props.dispatch(actions.createList({title: "New Shopping List"}))
  // }
  // render() {
    // const {lists} = this.props

    // return (
      // <div>
        // <button onClick={this.handleClick}>+</button>
        // <Lists lists={lists}/>
      // </div>
    // ); 
  // } 
// }

// export default connect(state => ({ lists: state.lists }))(App)

///////////////////////////////////////////////////////////////////////////////////////
// Hand click stuff here?
///////////////////////////////////////////////////////////////////////////////////////
// class App extends React.Component {
  // handleClick = () => {
    // this.props.dispatch(actions.createItem({text: "New Shopping Item"}))
  // }

  // onValueClick = () => {

    // console.log("Inside app onValueClick")
  // }

  // onEdit = () => {
    // this.props.dispatch(actions.updateItem(this.state.text))
    // console.log("text>>>",this.state.text)
    // console.log("Inside app onEdit")
  // }

  // onDelete = () => {
    // console.log("Inside app onDelete")
  // }


  // render() {
    // const items = this.props

    // return (
      // <div>
        // <button onClick={this.handleClick}>+</button>
        // <Items 
          // items={items}
          // onValueClick={this.onValueClick}
          // onEdit={this.onEdit} 
          // onDelete={this.onDelete}
        // />
      // </div>
    // ); 
  // } 
// }

// export default connect(state => ({ items: state.items }))(App)

// class App extends React.Component { 
  // handleClick = () => {
    // this.props.dispatch(actions.createItem())
  // }

  // render() {
    // const { items, lists, dispatch } = this.props

    // const listActions = bindActionCreators(ListActions, dispatch);
    // const itemActions = bindActionCreators(ItemActions, dispatch);

    // return (
      // <div>
        // <button onClick={listActions.createList.bind(null, { title: "New Shopping List" })}>+</button>
        // <Lists lists={lists} items={items}
          // listActions={listActions} itemActions={itemActions}
        // />
        // {[><Items items={items}/><]}
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

import React from 'react'
import Items from './Items.jsx'
import * as actions from '../actions/items'
import { connect } from 'react-redux'

class App extends React.Component { 
  handleClick = () => {
    this.props.dispatch(actions.createItem({text: "New Shopping Item"}))
  }

  render() {
    const { items, createItem, dispatch } = this.props

    return (
      <div>
        <button onClick={this.handleClick}>+</button>
        <Items items={items} />
      </div>
    ); 
  }
}
export default connect(state => ({items: state.items}))(App)
