import { createSlice } from '@reduxjs/toolkit'
import { characterSheet } from '../../../testData/initialState'

const { /* actions, */ reducer } = createSlice({
  name: 'info',
  initialState: characterSheet.info,
  reducers: {
  }
})

// export const { } = actions

export default reducer