import { createSlice } from '@reduxjs/toolkit'
import { characterSheet } from '../../../testData/initialState'

const attackBonusSlice = createSlice({
  name: 'attackBonus',
  initialState: characterSheet.attackBonus,
  reducers: {

  }
})

export const { } = attackBonusSlice.actions

export default attackBonusSlice.reducer