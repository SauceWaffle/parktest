
import React from 'react'
import { connect } from 'react-redux'

import * as logoActions from '../containers/logo'


class Logo extends React.Component {

  logoClicked () {
    this.props.dispatch(logoActions.goHome())
  }

  render () {
    return (
      <div id="logo" onClick={() => this.logoClicked()}>
        <img
          src='../images/logo-big.png'
          style={{background: '#333'}}
        />
      </div>
    )
  }

}

const mapStateToProps = (state/*, props*/) => {
  return {
    path: state._logo.path
  }
}

const LogoConnect = connect(mapStateToProps)(Logo)

export default LogoConnect
