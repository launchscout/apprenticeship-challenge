import reducer from '../app/reducers/items'

describe('Item Reducers', () => {
  const initialState = [{
    id: 0,
    sku: "00000000",
    text: "Initial State",
    price: "1.00"
  }]

  it('should return initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({})
  })

  it('should handle CREATE_ITEM', () => {
    expect(
      reducer(undefined, {
        type: 'CREATE_ITEM',
        item: initialState[0]
      })
    )
  })

  xit('should handle UPDATE_ITEM', () => {
    const createdItem = reducer(initialState, "CREATE_ITEM")
    const updatedItem = {
      id: 0,
      sku: "11111111",
      text: "updated",
      price: "2.00"
    }
    const nextState = reducer(updatedItem, "UPDATE_ITEM")
    expect(nextState).toEqual(
      {
        id: 0,
        sku: "11111111",
        text: "updated",
        price: "2.00"
      }
    )
  })

  it('should handle DELETE_ITEM', () => {
    const createdItem = reducer(initialState, "CREATE_ITEM")

    const nextState = reducer(createdItem.id, "DELETE_ITEM")
    expect(nextState).toEqual({})
  })
})
