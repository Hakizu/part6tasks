import React from 'react'
import { useDispatch } from 'react-redux'
import { currentFilter,noFilter } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()
  const handleChange = (event) => {
    dispatch(currentFilter(event.target.value))
    if (event.target.value === '') {
      dispatch(noFilter(event.target.value))
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

export default Filter