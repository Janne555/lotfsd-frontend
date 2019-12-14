import { createSlice } from '@reduxjs/toolkit'
import { characterSheet } from '../../../testData/initialState'

const currentHPSlice = createSlice({
  name: 'currentHP',
  initialState: characterSheet.currentHP,
  reducers: {
  
  }
})

export const {} = currentHPSlice.actions

export default currentHPSlice.reducer