import * as types from '../actions/items'
import uuid from 'node-uuid'

// Get max id from items and add one to the next one
// function getId(state) {
  // return state.items.reduce((maxId, todo) => {
    // return Math.max(item.id, maxId)
  // }, -1) + 1
// }

// eventually
// const initialState = List();

const initialState = []


let items = (state = initialState, action) => {
  // don't need this since we set state to default initialState
  // if (typeof state 'undefined') {
    // return InitialState
  // }
  switch (action.type) {
    case types.CREATE_ITEM:
      //
      // http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html
      // https://github.com/sebmarkbage/ecmascript-rest-spread
      // spread operator
      //
      // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
      // we could potentially use this syntax as well
      //
      // return Object.assign({}, state, {
        // items: [
            // // ...state.items,
            // console.log("action", action, "aciton-text", aciton.text)
            // {
              // id: uuid-v4(),
              // text: action.text,
              // checked: false
            // }
          // ]
        // }
      // )
      return {
        id: uuid.v4(),
        ...item
      }
      // return [
        // ...state,
        // action.item
      // ];

    default:
      return state;
  }
 }

 export default items
