import uuid from 'node-uuid'

export const CREATE_ITEM = 'CREATE_ITEM'
export function createItem(item) {
  return {
    type: CREATE_ITEM,
    id: uuid.v4(),
    ...item
  }
}

export const UPDATE_ITEM = 'UPDATE_ITEM'
export function updateItem(id, text) {
  // debugger
  return {
    type: UPDATE_ITEM,
    id,
    text
  }
}

export const DELETE_ITEM = "DELETE_ITEM"
export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    id
  }
}
