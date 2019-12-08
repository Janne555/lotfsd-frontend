import { createSlice } from '@reduxjs/toolkit'
import { retainers } from '../../testData/initialState'


const retainersSlice = createSlice({
  name: "retainers",
  initialState: retainers,
  reducers: {
  }
})

export const { } = retainersSlice.actions

export default retainersSlice.reducer