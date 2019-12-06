import { combineReducers } from 'redux'
import characterSheet from './characterSheet'
import itemIndex from './itemIndex'

export default combineReducers({
  characterSheet,
  itemIndex
})