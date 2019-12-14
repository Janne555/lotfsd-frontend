import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { characterSheet } from '../../../testData/initialState'

const currentHPSlice = createSlice({
  name: 'currentHP',
  initialState: characterSheet.currentHP,
  reducers: {
    setValue(state, action: PayloadAction<number>) {
      return action.payload
    }
  }
})

export const { setValue } = currentHPSlice.actions

export default currentHPSlice.reducer