
const notificationReducer = (state = '', action) => {
  console.log('current action', action)
  switch(action.type) {
    case 'addAnecdote':
      return action.data

    case 'vote':
      return action.data
    
    case 'removeNoti':
      return ''

    default:
      return state
  }
}

export const removeNoti = () => {
  return{
    type: 'removeNoti'
  }
}

export default notificationReducer