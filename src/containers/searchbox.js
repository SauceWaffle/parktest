


export function searchClicked() {
  return {
    type: 'SEARCH_BUTTON_CLICKED'
  }
}


export function updateSearchCriteria(criteria) {
  return {
    type: 'SEARCH_CRITERIA_UPDATED',
    searchCriteria: criteria
  }
}
