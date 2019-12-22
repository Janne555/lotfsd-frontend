import { savingThrows } from '../../../testData/initialState'
import { createSlice } from '@reduxjs/toolkit'

const savingThrowsSlice = createSlice({
  name: 'savingThrows',
  initialState: savingThrows,
  reducers: {
    setSavingThrow(state, action: AppAction<{ savingThrow: keyof SavingThrows, value: number }>) {
      const { id, savingThrow, value } = action.payload
      state.byId[id][savingThrow] = value
    }
  }
})

export const { setSavingThrow } = savingThrowsSlice.actions

export default savingThrowsSlice.reducer