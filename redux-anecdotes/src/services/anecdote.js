import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  console.log('trigger');
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const update = async (id) => {
  const currentAnecdote = await axios.get(`${baseUrl}/${id}`)

  const updatedNote = {
    ...currentAnecdote.data,
    votes: currentAnecdote.data.votes + 1
  }
  const response = axios.put(`${baseUrl}/${id}`, updatedNote)
  return response
  }

export default { getAll, createNew, update }