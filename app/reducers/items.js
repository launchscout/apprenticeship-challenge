import * as types from '../actions/items'

const initialState = []

export default function items(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_ITEM:
      return [ ...state, action.item ]

    case types.UPDATE_ITEM:
      return state.map((item) => {
        if (item.id === action.id) {
          return Object.assign({}, item, action)
        }

        return item
      })

    case types.DELETE_ITEM:
      return state.filter((item) => item.id !== action.id)

    case types.CHECK_ITEM:
      return state.map((item) => {
        if (item.id === action.id) {
          return Object.assign({}, item,
            {
              checked: !item.checked
            }
          )
        }

        return item
      })

    default:
      return state
  }
}
