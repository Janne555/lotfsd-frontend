import { combineReducers } from 'redux'
import attributes from './attributes'
import savingThrows from './savingThrows'

export default combineReducers({
  attributes,
  savingThrows
})