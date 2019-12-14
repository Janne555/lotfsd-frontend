import { createSlice } from '@reduxjs/toolkit'
import { characterSheet } from '../../../testData/initialState'

const maxHPSlice = createSlice({
  name: 'maxHP',
  initialState: characterSheet.maxHP,
  reducers: {
  
  }
})

export const {} = maxHPSlice.actions

export default maxHPSlice.reducer