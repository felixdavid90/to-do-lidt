const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state, //our state is in array
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default todos

//action  they send data to store, send by store.dispath()
//change action then we need to supply empty object as first parameter.
// todos:[
// ..state.todos,
// // {
// }
// ]
//child reducer. combining reducer to make it as a fuction, so that we can get the action. 
