
import React from 'react'
import { connect } from 'react-redux'


import SearchBox from './searchbox'
import Logo from './logo'



class TopBar extends React.Component {



  render () {

    // put any javascript here that needs to pass in variables or do some work
    var { path, searched, searchCriteria, reduxState} = this.props

    return (
      <div>
        <Logo />
        <SearchBox />


        <div>
          You are typing this: <b> { `${searchCriteria}` }</b>
        </div>


        <br /> <br />
        <pre>
          redux state = { JSON.stringify(reduxState, null, 2) }
        </pre>
      </div>
    )
  }
}


//
const mapStateToProps = (state/*, props*/) => {
  return {
    path: state._logo.path,
    searched: state._search.searched,
    searchCriteria: state._search.searchCriteria,
    reduxState: state
  }
}

const TopBarConnect = connect(mapStateToProps)(TopBar)

export default TopBarConnect
