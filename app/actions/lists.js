import uuid from 'node-uuid'

export const CREATE_LIST = 'CREATE_LIST'
export function createList(list) {
  return {
    type: CREATE_LIST,
    list: {
      id: uuid.v4(),
      items: list.items || [],
      ...list
    }
  }
}

export const UPDATE_LIST = 'UPDATE_LIST'
export function updateList(updatedList) {
  return {
    type: UPDATE_LIST,
    ...updatedList
  }
}

export const DELETE_LIST = 'DELETE_LIST'
export function deleteList(id) {
  return {
    type: DELETE_LIST,
    id
  }
}

export const CONNECT_TO_LIST = 'CONNECT_TO_LIST'
export function connectToList(listId, itemId) {
  return {
    type: CONNECT_TO_LIST,
    listId,
    itemId
  }
}

export const DISCONNECT_FROM_LIST = 'DISCONNECT_FROM_LIST'
export function disconnectFromList(listId, itemId) {
  return {
    type: DISCONNECT_FROM_LIST,
    listId,
    itemId
  }
}
