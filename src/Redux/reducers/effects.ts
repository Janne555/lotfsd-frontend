import { effects } from '../../testData/initialState'
import { createSlice } from '@reduxjs/toolkit'

const effectSlice = createSlice({
  name: 'effects',
  initialState: effects,
  reducers: {

  }
})

// export const { } = effectSlice.actions

export default effectSlice.reducer