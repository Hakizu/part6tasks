import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voting } from '../reducers/anecdoteReducer'
import { removeNoti } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector(({ Filter, anecdotes }) => {
    return Filter.type === 'filter'
      ? anecdotes.filter(a => a.content.includes(Filter.data))
      : anecdotes
  })

  const vote = (props) => {
    dispatch(voting(props))
    setTimeout(() => {
      dispatch(removeNoti())
    }, 5000)
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList