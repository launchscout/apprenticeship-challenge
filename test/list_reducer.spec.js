import reducer from '../app/reducers/lists'

describe('List Reducers', () => {
  const initialState = [{
    id: 0,
    title: 'New Shopping List',
    items: []
  }]

  const createdList = reducer(undefined, {
    type: 'CREATE_LIST',
    list: initialState[0],
  })

  it('should return initial state', () => {
    expect(reducer(undefined, {})).toEqual([])
  })

  it('should handle CREATE_LIST', () => {
    expect(createdList).toEqual([
      {
        id: 0,
        title: 'New Shopping List',
        items: []
      }
    ])
  })

  it('should handle UPDATE_LIST', () => {
    const list = { title: 'Updated Title' }

    const newState = reducer(createdList, {// << not sure why it wont work with createdList
      type: 'UPDATE_LIST',
      id: 0,
      title: list.title
    })

    expect(newState[0].title).toMatch(/Updated Title/)
  })

  it('should handle DELETE_LIST', () => {
    const nextState = reducer(createdList.id, 'DELETE_LIST')

    expect(nextState).toEqual([])
  })

  it('should handle CONNECT_TO_LIST', () => {
    let item = { id: '12345' }

    const newState = reducer(createdList, {
      type: 'CONNECT_TO_LIST',
      listId: createdList[0].id,
      itemId: item.id
    })

    expect(newState[0].items.length).toEqual(1)
  })
})
