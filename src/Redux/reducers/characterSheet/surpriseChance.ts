import { createSlice } from '@reduxjs/toolkit'
import { characterSheet } from '../../../testData/initialState'

const surpriseChanceSlice = createSlice({
  name: 'surpriseChance',
  initialState: characterSheet.surpriseChance,
  reducers: {

  }
})

export const { } = surpriseChanceSlice.actions

export default surpriseChanceSlice.reducer