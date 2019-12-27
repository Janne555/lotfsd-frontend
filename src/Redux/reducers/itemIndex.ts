import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { itemIndex } from '../../testData/initialState'

const itemIndexSlice = createSlice({
  name: 'itemIndex',
  initialState: itemIndex,
  reducers: {
    addNewItem(state, action: PayloadAction<Item>) {
      state.byId[action.payload.id] = action.payload
      state.allIds.push(action.payload.id)
    }
  }
})

export const { addNewItem } = itemIndexSlice.actions

export default itemIndexSlice.reducer