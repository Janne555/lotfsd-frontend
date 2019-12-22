import { combineReducers } from 'redux'
import characterSheet from './characterSheet'
import itemIndex from './itemIndex'
import system from './system'

export default combineReducers({
  characterSheet,
  itemIndex,
  system
})