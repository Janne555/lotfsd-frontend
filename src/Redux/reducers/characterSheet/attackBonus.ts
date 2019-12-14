import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { characterSheet } from '../../../testData/initialState'

const attackBonusSlice = createSlice({
  name: 'attackBonus',
  initialState: characterSheet.attackBonus,
  reducers: {
    setValue(state, action: PayloadAction<number>) {
      return action.payload
    }
  }
})

export const { setValue } = attackBonusSlice.actions

export default attackBonusSlice.reducer