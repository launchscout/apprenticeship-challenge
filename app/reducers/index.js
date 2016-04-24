import { combineReducers } from 'redux'
import items from './items'
import lists from './lists'
import modal from './modal'
import {reducer as formReducer} from 'redux-form'

const ShoppingListReducers = combineReducers({
  form: formReducer,
  items,
  lists,
  modal
})

export default ShoppingListReducers
