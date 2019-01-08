import { VisibilityFilters } from '../actions'

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

export default visibilityFilter

// in here we wanted to to change the behavior that we want on the state.
// We return the previous state in the default case. It's important to return the previous state for any unknown action.
// we call this method as a compisition reducer style.
