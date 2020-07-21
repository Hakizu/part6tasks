const filterReducer = (state = 'ALL', action) => {
  console.log('filterState', state);
  console.log('filterAction', action);
  switch (action.type) {
    case 'filter':
      console.log('filter is active', action)
      return action

    case 'noFilter':
      return action.type

    default:
      return state
  }
}

export const currentFilter = (data) => {
  return {
    type: 'filter',
    data
  }
}

export const noFilter = (data) => {
  return {
    type: 'noFilter',
    data
  }
}

export default filterReducer