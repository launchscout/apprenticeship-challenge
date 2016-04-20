export const OPEN_MODAL = 'OPEN_MODAL'
export function openModal (listId) {
  return {
    type: OPEN_MODAL,
    listId: listId
  }
}

export const CLOSE_MODAL = 'CLOSE_MODAL'
export function closeModal () {
  return {
    type: CLOSE_MODAL
  }
}
