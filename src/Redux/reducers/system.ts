import { createSlice } from '@reduxjs/toolkit'
import { system } from '../../testData/initialState'

const { reducer } = createSlice({
  name: 'system',
  initialState: system,
  reducers: {

  }
})

// export const { } = savingThrowsSlice.actions

export default reducer