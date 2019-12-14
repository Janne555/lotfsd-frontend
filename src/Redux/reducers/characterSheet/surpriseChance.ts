import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { characterSheet } from '../../../testData/initialState'

const surpriseChanceSlice = createSlice({
  name: 'surpriseChance',
  initialState: characterSheet.surpriseChance,
  reducers: {
    setValue(state, action: PayloadAction<number>) {
      return action.payload
    }
  }
})

export const { setValue } = surpriseChanceSlice.actions

export default surpriseChanceSlice.reducer