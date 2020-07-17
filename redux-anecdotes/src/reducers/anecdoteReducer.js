const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch(action.type) {
    case 'vote':
      const id = action.data.id
      const likedAnecdote = state
        .find(a => a.id === id)

      const updatedLikedAnecdote = {
        ...likedAnecdote,
        votes: likedAnecdote.votes + 1
      }
      
      const newState = state.map(a => a.id !== id ? a : updatedLikedAnecdote)
        .sort((a,b) => b.votes - a.votes)
      return newState

    case 'addAnecdote':
      const newAnecdote = asObject(action.content)
      return state.concat(newAnecdote)

    default: 
        return state
  }
}

export default reducer