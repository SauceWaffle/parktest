
export default function _search(state = {}, action) {
  console.log('My SEARCH reducer was called with state ', state , ' and action ', action);

  switch (action.type) {
    case 'SEARCH_BUTTON_CLICKED':
      return {
        ...state,
        searched: true
      }
    case 'SEARCH_CRITERIA_UPDATED':
      return {
        ...state,
        searchCriteria: action.searchCriteria
      }
    default:
      return state
  }
}
