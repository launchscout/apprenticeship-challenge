import * as types from '../actions/modal'

const initialState = {
  isOpen: false
}

export default function modal (state = initialState, action) {
  switch (action.type) {
    // case types.TOGGLE_MODAL:
      // return {
        // isOpen: !state.isOpen,
        // listId: action.listId
      // }

    case types.OPEN_MODAL:
      return {
        isOpen: true,
        listId: action.listId
      }

    case types.CLOSE_MODAL:
      return {
        isOpen: false
      }

    default:
      return state
  }
}
