import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import ShoppingListReducers from '../reducers'

const loggerMiddleware = createLogger()

const store = createStore(
  ShoppingListReducers,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

export default store
