import { createSlice } from '@reduxjs/toolkit'
import { combatOptions } from '../../../testData/initialState'

const combatOptionsSlice = createSlice({
  name: 'combatOptions',
  initialState: combatOptions,
  reducers: {

  }
})

export const { } = combatOptionsSlice.actions

export default combatOptionsSlice.reducer