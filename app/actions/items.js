import uuid from 'node-uuid'


// http://redux.js.org/docs/recipes/UsingObjectSpreadOperator.html
// https://github.com/sebmarkbage/ecmascript-rest-spread
// spread operator
//
export const CREATE_ITEM = 'CREATE_ITEM'
export function createItem(item) {
  return {
    type: CREATE_ITEM,
    item: {
      id: uuid.v4(),
      item,
      checked: false
    }
  }
}

// const mapDispatchToProps = (dispatch) => {
  // return {
    // createItem: (item) => {
      // dispatch(
        // {
          // type: CREATE_ITEM,
          // value: item
        // }
      // )
    // }
  // }
// }
