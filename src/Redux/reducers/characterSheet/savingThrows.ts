import { savingThrows } from '../../../testData/initialState'
import { createSlice } from '@reduxjs/toolkit'

const savingThrowsSlice = createSlice({
  name: 'savingThrows',
  initialState: savingThrows,
  reducers: {

  }
})

// export const { } = savingThrowsSlice.actions

export default savingThrowsSlice.reducer