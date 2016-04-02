import * as types from '../actions/lists'

const initialState = []

export default function lists(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_LIST:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          items: action.items || []
        }
      ]

    case types.UPDATE_LIST:
      return state.map((list) => {
        if(list.id === action.id) {
          return Object.assign({}, list, action)
        }

        return list
      })

    case types.DELETE_LIST:
      return state.filter((list) => list.id !== action.id)

    case types.CONNECT_TO_LIST:
      const listId = action.listId
      const itemId = action.itemId

      return state.map((list) => {
        const index = list.items.indexOf(itemId)

        if(index >= 0) {
          return Object.assign({}, list, {
            items: list.items.length > 1 ? list.items.slice(0, index).concat(
              list.items.slice(index + 1)): []
          })
        }
        if(list.id === listId) {
          return Object.assign({}, list, {
            items: [...list.items, itemId]
          })
        }

        return list
      })

    case types.DISCONNECT_FROM_LIST:
      return state.map((list) => {
        if(list.id === action.listId) {
          return Object.assign({}, list, {
            items: list.items.filter((id) => id !== action.itemId)
          })
        }

        return list
      })

    default:
      return state
  }
}
