import { createSlice } from '@reduxjs/toolkit'
import { itemIndex } from '../../testData/initialState'

const itemIndexSlice = createSlice({
  name: 'itemIndex',
  initialState: itemIndex,
  reducers: {

  }
})

// export const {} = itemIndexSlice.actions

export default itemIndexSlice.reducer