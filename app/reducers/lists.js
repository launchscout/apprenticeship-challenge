import * as types from '../actions/lists'

const initialState = []

export default function lists(state = initialState, action) {
  switch (action.type) {
    case types.CREATE_LIST:
      return [...state, action.list]

    case types.UPDATE_LIST:
      return state.map((list) => {
        if(list.id === action.id) {
          return Object.assign({}, list, action)
        }

        return list;
      })
    default:
      return state;
  }
}
