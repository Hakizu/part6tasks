const notificationReducer = (state = '', action) => {
  console.log('current action', action)
  switch(action.type) {

    case 'setNoti':
      return action.data
    
    case 'removeNoti':
      return ''

    default:
      return state
  }
}

let timeID = null

export const setNoti = (data, timeout) => {
  return async dispatch => {
    dispatch({
      type: 'setNoti',
      data
    })

    if (timeID) {
      clearTimeout(timeID)
    }

    timeID = setTimeout(() => {
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