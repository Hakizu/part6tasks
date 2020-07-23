import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import anecdoteReducer, { initAnec } from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import anecdoteService from './services/anecdote'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer,
  Filter: filterReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

anecdoteService.getAll().then(anecdotes =>
  store.dispatch(initAnec(anecdotes))
  )

store.subscribe(() => console.log(store.getState()))

export default store