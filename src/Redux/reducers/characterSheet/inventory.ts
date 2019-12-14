import { inventory } from '../../../testData/initialState'
import { createSlice } from '@reduxjs/toolkit'


const inventorySlice = createSlice({
  name: 'inventory',
  initialState: inventory,
  reducers: {

  }
})

// export const { } = inventorySlice.actions

export default inventorySlice.reducer