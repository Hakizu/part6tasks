import React from 'react'
import { connect } from 'react-redux'
import { voting } from '../reducers/anecdoteReducer'
import { setNoti } from '../reducers/notificationReducer'

const AnecdoteList = (props) => {
 
  const anecdotes = () => {
    return props.filter.type === 'filter'
      ? props.anecdotes.filter(a => a.content.toLowerCase().includes(props.filter.data.toLowerCase()))
      : props.anecdotes
  }

  const vote = (anecdote) => {
    props.voting(anecdote)
    props.setNoti(anecdote , 10)
  }

  return (
    <div>
      {anecdotes()
        .sort((a,b) => b.votes - a.votes)
        .map(anecdote =>
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.Filter
  }
}

const mapDispatchToProps = {
  voting,
  setNoti
}

export default connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)