import { combineReducers } from 'redux'
import attributes from './attributes'
import savingThrows from './savingThrows'
import { createReducer } from 'typesafe-actions'
import { initialState } from '../../testData/initialState'

const attackBonus = createReducer(0)
const maxHP = createReducer(0)
const currentHP = createReducer(0)

export default combineReducers({
  attributes,
  savingThrows,
  attackBonus,
  maxHP,
  currentHP
})