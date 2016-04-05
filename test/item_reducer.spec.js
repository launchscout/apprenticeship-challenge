import expect from 'expect'
import * as actions from '../app/actions/items'
import reducer from '../app/reducers/items'

describe('Item Reducers', () => {
  const initialState = [{
    id: 0,
    text: "New Shopping Item",
  }]

  it('should return initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([])
  })

  it('should handle CREATE_ITEM', () => {
    expect(
      reducer(undefined, {
        type: 'CREATE_ITEM',
        item: initialState[0]
      })
    )
  })

  it('should handle UPDATE_ITEM', () => {
    const newState = {
      id: initialState.id,
      text: "Updated text"
    }

    const nextState = reducer(newState, "UPDATE_ITEM")
    expect(nextState).toEqual(
      {
        id: newState.id,
        text: "Updated text"
      }
    )
  })

  it('should handle DELETE_ITEM', () => {
    const createdItem = reducer(initialState, "CREATE_ITEM")

    const nextState = reducer(createdItem.id, "DELETE_ITEM")
    expect(nextState).toEqual([])
  })
})
