import { combineReducers } from 'redux'
import moviesReducer from './moviesReducer'

export default combineReducers({
  moviesList: moviesReducer
})