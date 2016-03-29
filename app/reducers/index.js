import { combineReducers } from 'redux'
import items from './reducer'

const ShoppingList = combineReducers({
  items
})

export default ShoppingList
