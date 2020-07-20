
const notificationReducer = (state = '', action) => {
  console.log('current action', action)
  switch(action.type) {
    case 'addAnecdote':
      return action.data
    
    default:
      return state
  }
}

export default notificationReducer