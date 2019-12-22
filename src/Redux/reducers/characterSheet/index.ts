import { combineReducers } from 'redux'
import attributes from './attributes'
import savingThrows from './savingThrows'
import inventory from './inventory'
import effects from './effects'
import commonActivities from './commonActivities'
import wallet from './wallet'
import languages from './languages'
import retainers from './retainers'
import combatOptions from './combatOptions'
import info from './info'

export default combineReducers({
  attributes,
  savingThrows,
  combatOptions,
  inventory,
  effects,
  commonActivities,
  wallet,
  languages,
  retainers,
  info
})