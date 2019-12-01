import { combineReducers } from 'redux'
import attributes from './attributes'
import savingThrows from './savingThrows'
import equipmentList from './equipmentList'
import effects from './effects'
import commonActivities from './commonActivities'
import { createReducer } from 'typesafe-actions'

const attackBonus = createReducer(0)
const maxHP = createReducer(15)
const currentHP = createReducer(10)
const surpriseChance = createReducer(4)

export default combineReducers({
  attributes,
  savingThrows,
  attackBonus,
  maxHP,
  currentHP,
  surpriseChance,
  equipmentList,
  effects,
  commonActivities
})