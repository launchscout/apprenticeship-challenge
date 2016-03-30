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
