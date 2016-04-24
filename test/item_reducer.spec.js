import reducer from '../app/reducers/items'
import * as ActionType from '../app/actions/items'

describe('Item Reducers', () => {
  const initialState = [{
    id: 0,
    sku: "00000000",
    text: "Initial State",
    price: "1.00",
    checked: false
  }]

  const createdItem = reducer(undefined, {
    type: ActionType.CREATE_ITEM,
    item: initialState[0]
  })

  it('should return initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({})
  })

  it('should handle CREATE_ITEM', () => {
    expect(createdItem).toEqual(
      [
        {
          id: 0,
          sku: "00000000",
          text: "Initial State",
          price: "1.00",
          checked: false
        }
      ]
    )
  })

  it('should handle UPDATE_ITEM', () => {
    let item = {
      id: 0,
      sku: "11111111",
      text: "updated",
      price: "2.00",
      checked: false
    }

    const updatedItem = reducer(createdItem, {
      type: ActionType.UPDATE_ITEM,
      updatedItem: item
    })

    expect(updatedItem).toEqual([ item ])
  })

  it('should handle DELETE_ITEM', () => {
    const nextState = reducer(createdItem.id, "DELETE_ITEM")
    expect(nextState).toEqual({})
  })
})
