import React from 'react'
import Lists from './Lists';
import { connect } from 'react-redux'
import { createList } from '../actions/lists'

// import Rebase from 're-base'

// const base = new Rebase.createClass('https://appshoppinglist.firebaseio.com/items/');

class App extends React.Component {
  handleClick = () => {
    this.props.dispatch(createList({title: "New Shopping List"}))
  }

  render() {
    const lists = this.props.lists

    return (
      <div>
        <button 
          className="add-list"
          onClick={this.handleClick}>New Shopping List</button>
        <Lists lists={lists}/>
      </div>
    )
  } 
}

export default connect(state => ({ lists: state.lists }))(App)

/////////////////////////////////////////////////////////////////////////////
// Working Items CRUD
/////////////////////////////////////////////////////////////////////////////

// import React from 'react'
// import Items from './Items.jsx'
// import * as actions from '../actions/items'
// import { connect } from 'react-redux'

// class App extends React.Component { 
  // handleClick = () => {
    // this.props.dispatch(actions.createItem({text: "New Shopping Item"}))
  // }

  // render() {
    // const { items, createItem } = this.props

    // return (
      // <div>
        // <button onClick={this.handleClick}>+</button>
        // <Items items={items} />
      // </div>
    // ) 
  // }
// }
// export default connect(state => ({items: state.items}))(App)
