import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { characterSheet } from '../../../testData/initialState'

const maxHPSlice = createSlice({
  name: 'maxHP',
  initialState: characterSheet.maxHP,
  reducers: {
    setValue(state, action: PayloadAction<number>) {
      return action.payload
    }
  }
})

export const { setValue } = maxHPSlice.actions

export default maxHPSlice.reducer