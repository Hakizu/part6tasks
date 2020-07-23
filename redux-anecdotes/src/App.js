import React, { useEffect }from 'react'
import NewAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'
import { useDispatch } from 'react-redux'
import { initAnec } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(initAnec())
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <Filter/>
      <AnecdoteList/>
      <NewAnecdote/>
      <Notification/>
    </div>
  )
}

export default App