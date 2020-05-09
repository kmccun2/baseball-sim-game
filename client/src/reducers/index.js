import { combineReducers } from 'redux'
import rosterReducer from './roster'
import lineupReducer from './lineup'

export default combineReducers({
  rosterReducer,
  lineupReducer,
})
