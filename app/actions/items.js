// import uuid from 'node-uuid'

// export const CREATE_ITEM = 'CREATE_ITEM'
// export function createItem(item) {
  // console.log("Inside action")
  // return {
      // type: CREATE_ITEM,
      // id: uuid.v4(),
      // item,
      // checked: false
  // }
// }
//

import uuid from 'node-uuid'

export const CREATE_ITEM = 'CREATE_ITEM'
export function createItem(item) {
  console.log("inside Action")
  return {
    type: CREATE_ITEM,
    item: {
      id: uuid.v4(),
      item: "Stuff",
      checked: false
    }
  }
}
