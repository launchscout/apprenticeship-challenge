import React from 'react'
import Lists from './Lists'
import { connect } from 'react-redux'
import { createList } from '../actions/lists'
// import Rebase from 're-base'

// const base = new Rebase.createClass('https://appshoppinglist.firebaseio.com/items/')

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
