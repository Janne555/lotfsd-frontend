import { savingThrows } from '../../../testData/initialState'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const savingThrowsSlice = createSlice({
  name: 'savingThrows',
  initialState: savingThrows,
  reducers: {
    setSavingThrow(state, action: PayloadAction<{ savingThrow: keyof SavingThrows, value: number }>) {
      state[action.payload.savingThrow] = action.payload.value
    }
  }
})

export const { setSavingThrow } = savingThrowsSlice.actions

export default savingThrowsSlice.reducer