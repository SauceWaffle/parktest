
// use Provider from react-redux which just simply pushes the entire store information down to
//    EVERY single DOM element below this very top level

import React from 'react'
import TopBar from './components/topbar'
import { Provider } from 'react-redux'

export default class Application extends React.Component {
  render () {
    return (
      // passing in 'this.props.store' here, which is the constant we set up earlier and was put into the global properties
      <Provider store={ this.props.store }>
        <div>
          <TopBar />
        </div>
      </Provider>
    )
  }
}
