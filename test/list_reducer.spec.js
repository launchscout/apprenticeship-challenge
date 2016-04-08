import reducer from '../app/reducers/lists'

describe('List Reducers', () => {
  const initialState = [{
    id: 0,
    title: 'New Shopping List',
    items: []
  }]

  it('should return initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([])
  })

  it('should handle CREATE_LIST', () => {
    expect(
      reducer(undefined, {
        type: 'CREATE_LIST',
        list: initialState[0]
      })
    ).toEqual([
      {
        id: 0,
        title: 'New Shopping List',
        items: []
      }
    ])
  })

  it('should handle UPDATE_LIST', () => {
    const newState = {
      id: initialState.id,
      title: 'Updated Title',
    }

    const nextState = reducer(newState, 'UPDATE_LIST')
    expect(nextState).toEqual(
      {
        id: initialState.id,
        title: 'Updated Title',
      }
    )
  })

  it('should handle DELETE_LIST', () => {
    const createdList = reducer(initialState, 'CREATE_LIST')

    const nextState = reducer(createdList.id, 'DELETE_LIST')
    expect(nextState).toEqual([])
  })

  xit('should handle CONNECT_TO_LIST', () => {
    let createdList = reducer(initialState, 'CREATE_LIST')
    let item = { id: '12345', text: 'stuff' }

    const newState = reducer(
      createdList, {
        type: 'CONNECT_TO_LIST',
        listId: createdList.id,
        itemId: item.id
      })
    expect(newState[0]).toEqual(1)
  })
})
