
// import the normal stuff from redux, create the store and set up a combine reducer because i have multiple actions
import { createStore, combineReducers } from 'redux'

// for simplicity, store all the reducers in one place
import * as reducers from './reducers/reducers'



export default function(data) {
  var reducer = combineReducers(reducers)
  var store = createStore(reducer, data)

  return store
}
