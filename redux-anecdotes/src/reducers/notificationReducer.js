const notificationReducer = (state = '', action) => {
  console.log('current action', action)
  switch(action.type) {
    case 'addAnecdote':
      return action.data

    case 'setNoti':
      return action.data
    
    case 'removeNoti':
      return ''

    default:
      return state
  }
}

export const setNoti = (data, timeout) => {
  return async dispatch => {
    dispatch({
      type: 'setNoti',
      data
    })
    setTimeout(() => {
      dispatch(removeNoti())
    }, 5000)
  }
}

export const removeNoti = () => {
  return {
    type: 'removeNoti'
  }
}

export default notificationReducer