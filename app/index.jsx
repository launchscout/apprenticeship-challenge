import './main.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import ShoppingList from './reducers'

let store = createStore(ShoppingList)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
