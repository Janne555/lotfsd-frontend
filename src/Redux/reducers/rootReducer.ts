import { combineReducers } from 'redux'
import characterSheet from './characterSheet'
import itemIndex from './itemIndex'
import system from './system'
import userInterface from './userInterface'

export default combineReducers({
  characterSheet,
  itemIndex,
  system,
  userInterface
})