import * as types from '../actions/items'
// import uuid from 'node-uuid'

const initialState = []

export default function items(state = initialState, action) {
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
      console.log("Inside Reducer", types.CREATE_ITEM, "<<< CREATE ITEM")
      return [
        ...state,
          {
            id: action.id,
            text: action.text,
            complete: false
          }
        ]

    default:
      return state;
  }
 }
