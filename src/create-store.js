
// import the normal stuff from redux, create the store and set up a combine reducer because i have multiple actions
import { createStore, combineReducers } from 'redux'

// for simplicity, store all the reducers in one place
import _search from './reducers/searchbox'
import _logo from './reducers/logo'


export default function(data) {
  var reducer = combineReducers({ _search, _logo })
  var store = createStore(reducer, data)

  return store
}
