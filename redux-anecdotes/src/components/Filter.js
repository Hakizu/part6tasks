import React from 'react'
import { connect } from 'react-redux'
import { currentFilter, noFilter } from '../reducers/filterReducer'

const Filter = (props) => {
  const handleChange = (event) => {
    
    props.currentFilter(event.target.value)
    if (event.target.value === '') {
      props.noFilter(event.target.value)
    }
  }

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      Filter <input onChange={handleChange}/>
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
  noFilter,
  currentFilter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)