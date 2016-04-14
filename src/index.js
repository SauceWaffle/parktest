
import React from 'react'
import { render } from 'react-dom'


// simplify creating the global store by having it in create-store file
import createStore from './create-store'

// Application is the root component of our application and the one that holds Redux's Provider...
import Application from './application'


// set up 'store' to handle all the store information
const store = createStore()


// render from react-dom instead of using ReactDOM (so it's the same thing)
render(
  <Application store={store} />,
  document.getElementById('home')
)
