

// set up the function which changes the state
export default function _logo(state = {}, action) {
  console.log('My LOGO reducer was called with state ', state , ' and action ', action);

  switch (action.type) {
    case 'GO_HOME_CLICKED':
      return {
        ...state,
        path: '/home'
      }
    default:
      return state
  }
}
