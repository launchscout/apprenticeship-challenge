import uuid from 'node-uuid'

export const CREATE_ITEM = 'CREATE_ITEM'
export function createItem(item) {
  return {
    type: CREATE_ITEM,
    item: {
      id: uuid.v4(),
      ...item
    }
  }
}

export const UPDATE_ITEM = 'UPDATE_ITEM'
export function updateItem(updatedItem) {
  return {
    type: UPDATE_ITEM,
    ...updatedItem
  }
}

export const DELETE_ITEM = "DELETE_ITEM"
export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    id
  }
}
