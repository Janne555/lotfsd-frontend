import { combineReducers } from 'redux'
import attributes from './attributes'
import savingThrows from './savingThrows'
import inventory from './inventory'
import effects from './effects'
import commonActivities from './commonActivities'
import wallet from './wallet'
import languages from './languages'
import { createSlice } from '@reduxjs/toolkit'

const attackBonus = createSlice({
  name: 'attacBonus',
  initialState: 0,
  reducers: {

  }
})

const maxHP = createSlice({
  name: 'maxHP',
  initialState: 15,
  reducers: {

  }
})

const currentHP = createSlice({
  name: 'currentHP',
  initialState: 10,
  reducers: {

  }
})

const surpriseChance = createSlice({
  name: 'surpriseChance',
  initialState: 4,
  reducers: {

  }
})

export default combineReducers({
  attributes,
  savingThrows,
  attackBonus: attackBonus.reducer,
  maxHP: maxHP.reducer,
  currentHP: currentHP.reducer,
  surpriseChance: surpriseChance.reducer,
  inventory,
  effects,
  commonActivities,
  wallet,
  languages
})