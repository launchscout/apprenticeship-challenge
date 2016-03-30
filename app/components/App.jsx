import React from 'react'
import uuid from 'node-uuid'
// import Lists from './Lists.jsx';
// import { createList } from '../actions/lists.js'
import Items from './Items.jsx'
import * as actions from '../actions/items'
import { connect } from 'react-redux'
import store from '../stores/store' 
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

export default class App extends React.Component { 
  render() {
    const { items } = this.props
    return (
      <div>
        <button onClick={store.dispatch({type: "CREATE_ITEM"})}>+</button>
        <Items items={items}/>
      </div>
    ); 
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    craeteItem: () => {
      console.log("Clicked")
      // dispatch({type: CREATE_ITEM})
    }
  }
}

// export default connect(
  // state => ({
    // items: state.items
  // }), { createItem })(App)

// export default class App extends React.Component { 
  // componentDidMount() {
    // let { dispatch } = this.props

    // let action = ItemsActionsCreators.createItem({text: "New Stuff"})
    // dispatch(action)
  // }
  // render() {
    // let { items, dispatch } = this.props

    // let boundActionCreators = bindActionCreators(ItemsActionCreators, dispatch)
    // console.log(boundActionCreators)
    // return (
      // <div>
        // <button onClick={boundActionCreators}>+</button>
        // <Items/>
      // </div>
    // ) 
  // }
// }

