import uuid from 'node-uuid'

export const CREATE_ITEM = 'CREATE_ITEM'

export function createItem(item) {
  return {
    type: CREATE_ITEM,
    id: uuid.v4(),
    ...item
  }
}

// export function updateItem(id, text) {
  // return {
    // type: UPDATE_ITEM,
    // id,
    // text
  // }
// }

// export function deleteItem(id) {
  // return {
    // type: DELETE_ITEM,
    // id
  // }
// }
