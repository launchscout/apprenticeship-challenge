import { combineReducers } from 'redux'
import items from './items'
import lists from './lists'

const ShoppingListReducers = combineReducers({
  items,
  lists
})

export default ShoppingListReducers
