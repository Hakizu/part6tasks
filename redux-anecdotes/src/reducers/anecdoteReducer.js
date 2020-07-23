import anecdotesService from '../services/anecdote'

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {

    case 'addAnecdote':
      return [...state, action.data]
        // return state.concat(action.data)

    case 'initAnec':
      return action.data

    case 'vote':
      const id = action.data.id
      const likedAnecdote = state
        .find(a => a.id === id)

      const updatedLikedAnecdote = {
        ...likedAnecdote,
        votes: likedAnecdote.votes + 1
      }

      return state
        .map(a => a.id !== id ? a : updatedLikedAnecdote)
        .sort((a,b) => b.votes - a.votes)

    default: 
        return state
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.createNew(content)
    dispatch({
      type: 'addAnecdote',
      data: newAnecdote
    })
  }
}

export const voting = (data) => {
  return {
    type: 'vote',
    data
  }
}

export const initAnec = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch({
      type: 'initAnec',
      data: anecdotes
    })
  }
}

export default anecdoteReducer