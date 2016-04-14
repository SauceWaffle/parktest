import React from 'react'
import { connect } from 'react-redux'

import * as searchActions from '../containers/searchbox'


class SearchBox extends React.Component {

  onSearchCriteriaUpdate() {
    var criteria = React.findDOMNode(this.refs.searchTextArea).value.trim()
    this.props.dispatch(searchActions.updateSearchCriteria(criteria))
  }

  searchClicked () {
    this.props.dispatch(searchActions.searchClicked())
  }

  render () {
    return (
      <div>
        <textarea placeholder="Enter Search" ref="searchTextArea" onChange={() => this.onSearchCriteriaUpdate()}></textarea>
        <button onClick={() => this.searchClicked()} >search</button>
      </div>
    )
  }
}

const mapStateToProps = (state/*, props*/) => {
  return {
    searched: state._search.searched,
    criteria: state._search.criteria
  }
}

const SearchBoxConnect = connect(mapStateToProps)(SearchBox)

export default SearchBoxConnect
