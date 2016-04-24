import React from 'react'
import Lists from './Lists'
import { connect } from 'react-redux'
import { createList } from '../actions/lists'
import Nav from './Nav'

export class App extends React.Component {

  handleClick = () => {
    this.props.dispatch(createList({title: 'New Shopping List'}))
  }

  render() {
    const lists = this.props.lists

    return (
      <div>
        <Nav>
          <h1 className='h1 header'>Shopping List</h1>
          <button
            className='btn add-list'
            onClick={this.handleClick}>New List
          </button>
        </Nav>
        <Lists lists={lists}/>
      </div>
    )
  }
}

export default connect(state => ({ lists: state.lists }))(App)
