// import React from 'react'
// import Lists from './Lists.jsx';
// import Items from './Items.jsx'
// import { bindActionCreators } from 'react-redux'
// import { connect } from 'react-redux'
// import * as actions from '../actions/items'
// import * as ListActions from '../actions/lists'
// import * as ItemActions from '../actions/items'
// import Rebase from 're-base';

// const base = new Rebase.createClass('https://appshoppinglist.firebaseio.com/items/');

// export default class App extends React.Component {
  // render() {
    // const { lists, createList } = this.props
    // return (
      // <div>
        // <button onClick={createList.bind(null, {title: "New Shopping List"})}>+</button>
        // <Lists lists={lists}/>
      // </div>
    // ); 
  // } 
// }

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

